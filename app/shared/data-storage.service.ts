import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { RecipesService } from './recipes.service';
import { Recipe } from './recipe.model';
import { map } from 'rxjs/operators'
import { AuthService } from '../auth/auth.service';
import { auth } from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  selectedFile: File = null
  constructor(private http: HttpClient,
    private recipesService: RecipesService,
    private authService: AuthService,
    ) { }

  storeRecipe() {
    return this.http.put("https://recipe-book-ec1dc.firebaseio.com/recipes.json", this.recipesService.getRecipes())    
  }
  getRecipes() {
    this.http.get("https://recipe-book-ec1dc.firebaseio.com/recipes.json").subscribe(
      (res: Response) => {
        console.log(res)
      }
    )
  }
 
}
