import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LogoComponent } from './logo.component';
import { MyNavComponent } from './my-nav.component';
import { AGetRequestComponent } from './a-get-request.component'
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';
import { KeystrokesPlayComponent } from './keystrokes-play.component';
import { ContactComponent } from './contact.component';
import { RandomTextGeneratorComponent } from './random-text-generator.component';


@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    MyNavComponent,
    AGetRequestComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    KeystrokesPlayComponent,
    RandomTextGeneratorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
