import { NgModule, Type } from '@angular/core';
const modules: Array<Type<any> | any[]> = [];

@NgModule({
  imports: [...modules],
  exports: [...modules]
})
export class MaterialModule {}
