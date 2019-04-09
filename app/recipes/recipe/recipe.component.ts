import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from '../../shared/recipes.service';
import { Recipe } from '../../shared/recipe.model';
import { AuthService } from '../../auth/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
id;
recipe:Recipe;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private recipesService: RecipesService,
              private authService: AuthService,
            private toastrService: ToastrService) { }

  ngOnInit() {
    this.id=  this.route.snapshot.params['id'];
    this.recipe = this.recipesService.getRecipe(this.id)
  }
  onAddToShoppingList(){
   this.recipesService.addIngredientsToShoppingList(this.recipe.ingredients)
    this.router.navigate(['/shoppingList'])
  }
  onEditRecipe(){   
    this.router.navigate(['edit'],{relativeTo:this.route})
  }
  onDeleteRecipe(){
    if(this.authService.isAuthenticated()){
      this.recipesService.deleteRecipe(this.id);
      this.router.navigate(['/recipes']);
      this.toastrService.success('success','ine recipe deleted successfuly');
    }else{     
      this.router.navigate(['/login'])
      this.toastrService.warning('warning','please login first');
    }
  }
}
