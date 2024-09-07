import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessSearchComponent } from './business-search.component';
import { RouterModule } from '@angular/router';
import { BusinessSearchRoutes } from './business-search.routing';
import { FormsModule } from '@angular/forms';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar/navigation-bar.component';
import { SharedModule } from '../shared/shared.module';
import { TablesModule, TablesService } from '@sisitech/tables';
import { MyformModule } from '@sisitech/myform';
import { environment } from 'src/environments/environment';
import { SistchModalModule } from '@sisitech/utils';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '@sisitech/ngxs-auth';

const authConfig = {
  APIEndpoint: environment.APIEndpoint,
  version: "api/v1",
  clientId: environment.clientId,
  tokenUrl: "o/token/",
  revokeTokenUrl: "o/revoke_token/",
  profileUrl: "api/v1/users/me/",
}


@NgModule({
  declarations: [
    BusinessSearchComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(BusinessSearchRoutes),
    TablesModule.forChild(authConfig),
    MyformModule.forChild(authConfig),
    FormsModule,
    SharedModule,
    SistchModalModule,
  ],

  providers: [
    TablesService, {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ]
})
export class BusinessSearchModule { }
