import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selectedLocation:string = 'recipes';

  changeLocation(location:string){
      this.selectedLocation = location;
  }
}
