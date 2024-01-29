import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';
import { ShoppingListService } from 'src/app/services/shoppingList.service';
import { ActivatedRoute, Data, Params } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id : number;

  constructor( private recipeService : RecipeService,private shoppingListService : ShoppingListService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => { 
        this.id = +params["id"];
        this.recipe = this.recipeService.getRecipe(this.id);
      }
    )
  }

  addToShoppingList(){
    this.shoppingListService.addRecipeIngredients(this.recipe.ingredients);
  }

  onDeleteRecipe(){
    this.recipeService.deleteRecipe(this.id);
    
  }

}
