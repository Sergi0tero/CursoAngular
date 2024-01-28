import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";

@Injectable()

export class ShoppingListService{
    ingredientChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();

    ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
    ];

    getIngredient(index : number){
      return this.ingredients[index];
    }

    getIngredients(){
        return this.ingredients.slice();
    }

    addIngredient(newIngredient : Ingredient){
        this.ingredients.push(newIngredient);
        this.ingredientChanged.next(this.ingredients);
    }

    addRecipeIngredients(newIngredients : Ingredient[]){
        newIngredients.forEach(ingredient => {
            this.addIngredient(ingredient);
          });
    }

    updateIngredient(index : number, newIngredient: Ingredient){
        this.ingredients[index] = newIngredient;
        this.ingredientChanged.next(this.ingredients.slice());
    }
}