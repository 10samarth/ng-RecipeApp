import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes:Recipe[] = [
    new Recipe('A Test Recipe','Test Description','https://previews.123rf.com/images/csstockimages/csstockimages1710/csstockimages171001097/88101444-indian-traditional-street-food-pav-bhaji.jpg'),
    new Recipe('A Test Recipe 2','Test Description 2','https://previews.123rf.com/images/csstockimages/csstockimages1710/csstockimages171001097/88101444-indian-traditional-street-food-pav-bhaji.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
