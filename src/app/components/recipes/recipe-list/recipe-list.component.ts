import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../../../models/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://www.cookipedia.co.uk/wiki/images/d/d6/General_Tso%27s_chicken_recipe.jpg'
    ),
    new Recipe(
      'A Test Recipe',
      'This is another test',
      'https://www.cookipedia.co.uk/wiki/images/d/d6/General_Tso%27s_chicken_recipe.jpg'
    ),
  ];

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
