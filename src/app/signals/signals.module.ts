import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { SignalsLayoutComponent } from './layout/signals-layout/signals-layout.component';
import { CounterPageComponent } from './page/counter-page/counter-page.component';
import { PropertiesPageComponent } from './page/properties-page/properties-page.component';
import { UserInfoPageComponent } from './page/user-info-page/user-info-page.component';
import { SignalsRoutingModule } from './signals-routing.module';

@NgModule({
  declarations: [
    SignalsLayoutComponent,
    CounterPageComponent,
    PropertiesPageComponent,
    SideMenuComponent,
    UserInfoPageComponent,
  ],
  imports: [CommonModule, SignalsRoutingModule],
})
export class SignalsModule {}
