import { Component, OnInit} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

 
  constructor(private slService:ShoppingService) { }

  ngOnInit(): void {
  }
  addIngrident(formValue : NgForm){
    const formData = formValue.value
    const newIng = new Ingredient(formData.name,formData.amount);
    this.slService.addIngrident(newIng);

  }
}
