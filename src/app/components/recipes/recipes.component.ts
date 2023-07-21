import { Component, Input } from '@angular/core';
import { Recipe } from '../../../models/recipe';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent {
  selectedRecipe: Recipe;

  onRecipeWasSelected($event: Recipe) {}
}
