import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

@Injectable()

export class ShoppingListService{
    ingredientAdded = new EventEmitter<Ingredient[]>();

    ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
    ];

    getIngredients(){
        return this.ingredients.slice();
    }

    addIngredient(newIngredient : Ingredient){
        this.ingredients.push(newIngredient)
        this.ingredientAdded.emit(this.ingredients);
    }

    addRecipeIngredients(newIngredients : Ingredient[]){
        newIngredients.forEach(ingredient => {
            this.addIngredient(ingredient);
          });
    }
}