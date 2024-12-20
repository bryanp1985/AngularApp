import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PropertyCardComponent } from './property/property-card/property-card.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyListComponent } from './property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { HousingService } from './services/housing.service';

@NgModule({
  declarations: [	
    AppComponent,
    PropertyCardComponent,
    PropertyListComponent,
    NavBarComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
],
  providers: [
    HousingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
