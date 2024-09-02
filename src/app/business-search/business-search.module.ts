import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessSearchComponent } from './business-search.component';
import { RouterModule } from '@angular/router';
import { BusinessSearchRoutes } from './business-search.routing';
import { FormsModule } from '@angular/forms';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar/navigation-bar.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    BusinessSearchComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(BusinessSearchRoutes),
    FormsModule,
    SharedModule
  ]
})
export class BusinessSearchModule { }
