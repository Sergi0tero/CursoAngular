import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('ingredientNameInput') ingredientName;
  @ViewChild('ingredientAmountInput') ingredientAmount;

  @Output("newIngredient") newIngredient = new EventEmitter<Ingredient>;

  constructor() { }

  ngOnInit() {
  }

  addIngredient(){
    console.log(this.ingredientName.nativeElement.value)
    this.newIngredient.emit(new Ingredient(this.ingredientName.nativeElement.value, this.ingredientAmount.nativeElement.value))
  }
}
