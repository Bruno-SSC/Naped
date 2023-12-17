import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileRoutingModule } from './mobile-routing.module';
import { HeroComponent } from './components/hero/hero.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { MainImageComponent } from './components/main-image/main-image.component';
import { ListComponent } from './components/list/list.component';


@NgModule({
  declarations: [
    HeaderComponent,
    HeroComponent,
    HomeComponent,
    MainImageComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    MobileRoutingModule
  ]
})
export class MobileModule { }
