import { Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,OnDestroy {
  @ViewChild('f') slForm:NgForm
  subscription:Subscription
  editMode=false;
  editedItemIndex:number;
  editedItem:Ingredient
 
  constructor(private slService:ShoppingService) { }

  ngOnInit(): void {
    this.subscription = this.slService.startedEditing.subscribe(
      (index:number)=>{
          this.editMode=true;
          this.editedItemIndex = index;
          this.editedItem = this.slService.getIngrident(index);
          this.slForm.setValue({
            name:this.editedItem.name,
            amount:this.editedItem.amount
          })

      }
    )
  }

  onSubmit(formValue : NgForm){
    const formData = formValue.value
    const newIng = new Ingredient(formData.name,formData.amount);
    if(this.editMode){
      this.slService.updateIngrident(this.editedItemIndex,newIng);
    }
    else{
      this.slService.addIngrident(newIng);
    }
    this.editMode=false;
    formValue.reset()
  }
  onClear(){
    this.slForm.reset()
    this.editMode=false
  }
  onDelete(){
    this.slService.deleteIngrident(this.editedItemIndex);
    this.onClear()
  }


  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
