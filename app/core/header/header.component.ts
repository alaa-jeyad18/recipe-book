import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { state, trigger, style, transition, animate } from '@angular/animations';
import { DataStorageService } from '../../shared/data-storage.service';
import { Recipe } from '../../shared/recipe.model';
import { RecipesService } from '../../shared/recipes.service';
import { AuthService } from '../../auth/auth.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('scrollAnimation', [
      state('show', style({
        'background-color': "#000",
        'box-shadow': '0 3px 3px 0 rgba(0, 0, 0, 0.14), 0 1px 7px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -1px rgba(0, 0, 0, 0.2)'
      })),
      state('hide', style({
        'background-color': "transparent",
      })),
      transition('show <=> void', animate('700ms ease-in-out'))
    ])
  ]
})
export class HeaderComponent implements OnInit {

  toggleMenu = false;
  state = 'hide';
  showLinks: boolean= true;
  constructor(private dataStorage: DataStorageService,
              private recipesService: RecipesService,
              private authservice: AuthService
             ) { }

  ngOnInit() {
   

  }
  toggleNavbar() {
    this.toggleMenu = !this.toggleMenu
  }
  @HostListener('window: scroll', ['$event'])
  checkScroll() {
    if (window.pageYOffset > 100) {
      this.state = 'show'
    } else {
      this.state = 'hide'
    }
  }
  onSaveRecipes(){    
    this.dataStorage.storeRecipe().subscribe(
      (res: Response) => {
        console.log(res)
      }
    )
  }

  onFetchRecipes(){
    this.dataStorage.getRecipes()
  }

  isAuthenticated(){
   return  this.authservice.isAuthenticated()
  }
  onLogout(){
    this.authservice.logout()
  }
  onShowLinks(){
    this.showLinks= false;
  }
  onClickLogo(){
    this.showLinks=true
  }
}
