import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { AsideComponent } from './aside/aside.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [LayoutComponent, AsideComponent, HeaderComponent, FooterComponent, MainComponent],
  imports: [SharedModule]
})
export class LayoutModule {}
