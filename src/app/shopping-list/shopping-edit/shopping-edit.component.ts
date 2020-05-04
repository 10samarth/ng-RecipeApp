import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('ingName') ingNameRef:ElementRef
  @ViewChild('ingAmt') ingAmtRef:ElementRef
  @Output() addedIng = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit(): void {
  }
  addIngrident(){
    const ingName = this.ingNameRef.nativeElement.value;
    const ingAmt = this.ingAmtRef.nativeElement.value;
    const newIng = new Ingredient(ingName,ingAmt);
    this.addedIng.emit(newIng);

  }
}
