import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is a test recipe',
      'https://www.savorytooth.com/wp-content/uploads/2016/01/chicken-tikka-masala-bowl-square.jpg'
    ),
    new Recipe(
      'Another Test Recipe',
      'This is another test recipe',
      'https://www.savorytooth.com/wp-content/uploads/2016/01/chicken-tikka-masala-bowl-square.jpg'
    )
  ];

  constructor() { }

  ngOnInit() {
  }

}
