import { Component, Input } from '@angular/core';
import { Recipe } from '../../../models/recipe';
import { ShoppingListService } from '../../../services/shopping-list.service';
import { Ingredient } from '../../../models/ingredient';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent {
  @Input() recipe: Recipe;

  constructor(private shoppingListService: ShoppingListService) {}

  onAddToShoppingList() {
    // Making a deep copy to avoid modifying the original recipe
    const ingredientsCopy: Ingredient[] = this.recipe.ingredients.map((x) => ({
      ...x,
    }));
    this.shoppingListService.addIngredients(ingredientsCopy);
  }
}
