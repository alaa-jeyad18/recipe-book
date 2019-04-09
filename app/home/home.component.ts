import { Component, OnInit, HostListener, Renderer2, ElementRef, OnDestroy } from '@angular/core';
import { trigger, state, transition, style, animate} from"@angular/animations"
import { RecipesService } from '../shared/recipes.service';
import { Recipe } from '../shared/recipe.model';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations:[ 
    trigger('fade',
    [ 
      state('void', style({ opacity : 0})),
      transition(':enter',[ animate(300)]),
      transition(':leave',[ animate(500)]),
    ]
)]
})
export class HomeComponent implements OnInit, OnDestroy {
  recipes: Recipe[]=[]
  sub: Subscription
  images= [
    {"name":"../assets/images/slider-4.jpg","alt":"recipe-book"},
    {"name":"../assets/images/slider-9.jpg","alt":"recipe-book"},
    {"name":"../assets/images/slider-10.jpg","alt":"recipe-book"},
  ]
  constructor(private route:ActivatedRoute ,private elRef:ElementRef ,private rendrer: Renderer2, private recipesService: RecipesService) { }

 
  ngOnInit() {
    this.recipes=this.recipesService.getRecipes();
    this.sub = this.route.fragment.pipe(filter(f => !!f)).subscribe(f => document.getElementById(f).scrollIntoView());
  }

  ngOnDestroy(){
    this.sub.unsubscribe()
  }
 
}
