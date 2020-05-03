import {Component, EventEmitter, Output} from '@angular/core';

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html'
})

export class HeaderComponent{

    @Output() locationEvent = new EventEmitter<string>();
    
    onSelectNav(location:string){
        this.locationEvent.emit(location);
    }
}