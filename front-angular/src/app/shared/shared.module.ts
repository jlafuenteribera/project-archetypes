import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from './material.module';

const components: Array<Type<any> | any[]> = [];
const directives: Array<Type<any> | any[]> = [];
const pipes: Array<Type<any> | any[]> = [];

const modules: Array<Type<any> | any[]> = [
  CommonModule,
  TranslateModule,
  RouterModule,
  MaterialModule,
  ReactiveFormsModule
];

@NgModule({
  declarations: [...components, ...directives, ...pipes],
  imports: [...modules],
  exports: [...modules, ...components, ...directives, ...pipes]
})
export class SharedModule {}
