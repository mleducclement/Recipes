import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from '../../../../models/ingredient';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css'],
})
export class ShoppingListEditComponent {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  onAddItem() {
    const ingredientName = this.nameInputRef.nativeElement.value;
    const ingredientAmount = this.amountInputRef.nativeElement.value;

    if (this.hasValue()) {
      const newIngredient = new Ingredient(ingredientName, ingredientAmount);
      this.ingredientAdded.emit(newIngredient);

      this.nameInputRef.nativeElement.value = '';
      this.amountInputRef.nativeElement.value = '';
    }
  }

  hasValue() {
    return (
      this.nameInputRef.nativeElement.value !== '' &&
      this.amountInputRef.nativeElement.value !== ''
    );
  }
}
