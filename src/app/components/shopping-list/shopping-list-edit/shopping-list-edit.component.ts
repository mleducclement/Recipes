import { Component, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from '../../../models/ingredient';
import { ShoppingListService } from '../../../services/shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css'],
})
export class ShoppingListEditComponent {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {}

  onAddItem() {
    const ingredientName = this.nameInputRef.nativeElement.value;
    const ingredientAmount = this.amountInputRef.nativeElement.value;

    if (this.isValid()) {
      const newIngredient = new Ingredient(
        ingredientName,
        Number(ingredientAmount)
      );
      this.shoppingListService.addSingleIngredient(newIngredient);
      this.reset();
    }
  }

  private isValid() {
    return (
      this.nameInputRef.nativeElement.value !== '' &&
      this.amountInputRef.nativeElement.value !== ''
    );
  }

  private reset() {
    this.nameInputRef.nativeElement.value = '';
    this.amountInputRef.nativeElement.value = '';
  }
}
