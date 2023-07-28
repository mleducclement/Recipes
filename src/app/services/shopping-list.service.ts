import { Injectable } from '@angular/core';
import { Ingredient } from '../models/ingredient';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  ingredientAdded = new Subject<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  addSingleIngredient(ingredient: Ingredient): void {
    this.addIngredients([ingredient]);
  }

  addIngredients(ingredients: Ingredient[]): void {
    ingredients.forEach((x) => {
      if (!this.updateIngredient(x)) {
        this.ingredients.push(x);
      }
    });

    this.ingredientAdded.next(this.ingredients.slice());
  }

  updateIngredient(ingredient: Ingredient): boolean {
    const foundIngredient = this.checkIfDuplicate(ingredient);

    if (!foundIngredient) {
      return false;
    }

    foundIngredient.amount += ingredient.amount;
    return true;
  }

  checkIfDuplicate(ingredient: Ingredient): Ingredient {
    return this.ingredients.find((x) => x.name === ingredient.name);
  }
}
