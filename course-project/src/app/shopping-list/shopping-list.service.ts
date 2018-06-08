import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';

export class ShoppingListService {
  // alternative to the event emitter, we colud simply return the array
  // instead of a copy of the array
  // now we use a Subject instead of EventEmitter
  // ingredientsChanged = new EventEmitter<Ingredient[]>();
  ingredientsChanged = new Subject<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    // this.ingredientsChanged.emit(this.ingredients.slice());
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    /*
    for (let ingredient of ingredients) {
      this.addIngredient(ingredient);
    }
    */
   this.ingredients.push(...ingredients); // use the spread operator
   // this.ingredientsChanged.emit(this.ingredients.slice());
   this.ingredientsChanged.next(this.ingredients.slice());
  }
}
