import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessSearchComponent } from './business-search.component';
import { RouterModule } from '@angular/router';
import { BusinessSearchRoutes } from './business-search.routing';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    BusinessSearchComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(BusinessSearchRoutes),
    FormsModule
  ]
})
export class BusinessSearchModule { }
