import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "../recipes/recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";

@Injectable()

export class RecipeService{
    recipeChanged = new Subject<Recipe[]>();
     private recipes: Recipe[] = [
      new Recipe('Burger', 'Just a burger', 'https://png.pngtree.com/png-clipart/20221001/original/pngtree-fast-food-big-ham-burger-png-image_8648590.png',[
        new Ingredient("Pan", 2),
        new Ingredient("Carne", 1),
        new Ingredient("Queso", 1)
        ]),
      new Recipe('Pizza', 'Pepperoni pizza', 'https://co.littlecaesars.com/static/1581698757-col-pepperoni.png',[
        new Ingredient("Masa", 1),
        new Ingredient("Queso", 1),
        new Ingredient("Pasta de tomate", 1),
        new Ingredient("Pepperoni", 1)
      ])
    ];

    getRecipe(index : number){
      return this.recipes.slice()[index];
    }

    getRecipes(){
        return this.recipes.slice();
    }

    addRecipe(recipe : Recipe){
      this.recipes.push(recipe);
      this.recipeChanged.next(this.recipes.slice());
    }

    updateRecipe(updatedRecipe : Recipe, oldRecipeIndex : number){
      this.recipes[oldRecipeIndex] = updatedRecipe;
      this.recipeChanged.next(this.recipes.slice());
    }

    deleteRecipe(index : number){
      this.recipes.splice(index, 1);
      this.recipeChanged.next(this.recipes.slice());
    }

}