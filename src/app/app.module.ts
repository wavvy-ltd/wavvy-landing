import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxsModule } from '@ngxs/store';
import { NgxsAuthModule } from '@sisitech/ngxs-auth';
import { environment } from '../environments/environment';

const authConfig = {
  APIEndpoint: environment.APIEndpoint,
  version: environment.version,
  clientId: environment.clientId,
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forRoot([]),
    NgxsAuthModule.forRoot(authConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
