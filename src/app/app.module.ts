import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxsModule } from '@ngxs/store';
import { NgxsAuthModule } from '@sisitech/ngxs-auth';

const authConfig = {
  APIEndpoint: "https://api.expensetracker.wavvy.dev",
  version: "api/v1",
  clientId: "fbaPXGrD6wewVEqoOkJfvierIrYbnROPXMa8CDv5",
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
