import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective, BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { RecipesService } from '../../shared/recipes.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DataStorageService } from '../../shared/data-storage.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit {
  @ViewChild('autoShownModal') autoShownModal: ModalDirective;
  modalRef: BsModalRef;
  isModalShown: boolean = true;
  editMode: boolean = false;
  id: number;
  recipeForm: FormGroup

  showModal(): void {
    this.isModalShown = true;
  }
  hideModal(): void {
    this.autoShownModal.hide();
    this.router.navigate(['../recipes'])
  }


  constructor(private recipesService: RecipesService,
    private router: Router,
    private dataStorage: DataStorageService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.showModal();
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
    )
  }

  private initForm() {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    let recipeIngredients = new FormArray([]);

    if (this.editMode) {
      const recipe = this.recipesService.getRecipe(this.id)
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
      if (recipe['ingredients']) {
        for (let ingredient of recipe['ingredients']) {
          recipeIngredients.push(
            new FormGroup({
              'name': new FormControl(ingredient.name, Validators.required),
              'amount': new FormControl(ingredient.amount, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)
              ])
            })
          )
        }
      }
    }
    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, [Validators.required, Validators.minLength(4)]),
      'imagePath': new FormControl(recipeImagePath),
      'description': new FormControl(recipeDescription),
      'ingredients': recipeIngredients
    })

  }

  onSubmit() {
    if(this.editMode){
      this.recipesService.updateRecipe(this.id,this.recipeForm.value)
    }else{
      this.recipesService.addRecipe(this.recipeForm.value)
    }  
    this.hideModal()      
  }
  onFileChanged(event){
    console.log(event.target.files[0])
  }
  onAddIngredient() {
    (this.recipeForm.get('ingredients') as FormArray).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
    )
  }
  onDeleteIngredient(index: number){
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index)
  }
  getControls(){
    return (<FormArray>this.recipeForm.get('ingredients')).controls
  }
}
