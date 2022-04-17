import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewComponentComponent } from './new-component/new-component.component';
import { NewPipePipe } from './new-pipe.pipe';
import { NewSecondComponentComponent } from './new-second-component/new-second-component.component';



@NgModule({
  declarations: [
    NewComponentComponent,
    NewPipePipe,
    NewSecondComponentComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NewComponentComponent
  ]
})
export class NewModuleModule { }
