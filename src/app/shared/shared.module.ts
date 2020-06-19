import { NgModule } from '@angular/core';
import { DropdownDirective } from './dropdown.directive';
import { LoadingSpinnerClass } from './loading-spinner/loading-spinner.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [DropdownDirective,
        LoadingSpinnerClass],
    imports: [CommonModule],
    exports: [DropdownDirective,
        LoadingSpinnerClass,
        CommonModule]
})
export class SharedModule { }