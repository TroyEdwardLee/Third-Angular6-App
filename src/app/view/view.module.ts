import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponentComponent } from './view-component/view-component.component';
import { TestService } from '../test.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ViewComponentComponent],
  exports: [
    ViewComponentComponent
  ]
})
export class ViewModule {
  constructor(private svc: TestService) {
    this.svc.printToConsole(this.newMethod());
  }

  private newMethod(): any {
    return 'Get service from inner module | component!';
  }
}
