import { Component, OnInit, OnDestroy, TemplateRef} from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { RecipesService } from '../shared/recipes.service';
import { Subscription } from 'rxjs';
import { Recipe } from '../shared/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit, OnDestroy {
  recipes = []
  modalRef: BsModalRef;
  subscripion: Subscription
  constructor(private router: Router, private recipesService: RecipesService, private modalService:BsModalService) { }

  ngOnInit() {
    this.subscripion = this.recipesService.recipesChanges.subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      }
    )
    this.recipes = this.recipesService.getRecipes();
  }
  onNewRecipe(){
    this.router.navigate(['../recipes/new'])    
  }
 
  goToRecipe(i) {
    this.recipesService.getRecipe(i)
  }
  ngOnDestroy() {
    this.subscripion.unsubscribe()
  }
}
