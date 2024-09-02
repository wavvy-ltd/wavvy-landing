import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { HomeRoutes } from './home.routing';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar/navigation-bar.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(HomeRoutes),
    SharedModule
  ]
})
export class HomeModule { }
