import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('ingName') ingNameRef:ElementRef
  @ViewChild('ingAmt') ingAmtRef:ElementRef
 
  constructor(private slService:ShoppingService) { }

  ngOnInit(): void {
  }
  addIngrident(){
    const ingName = this.ingNameRef.nativeElement.value;
    const ingAmt = this.ingAmtRef.nativeElement.value;
    const newIng = new Ingredient(ingName,ingAmt);
    this.slService.addIngrident(newIng);

  }
}
