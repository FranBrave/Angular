
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AvengerListComponent } from '../app/pages/avenger-list/avenger-list.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AvengerComponent } from './pages/avenger-list/components/avenger/avenger.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './pages/avenger-list/components/footer/footer.component';
import { HeaderComponent } from './pages/avenger-list/components/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    AvengerListComponent,
    AvengerComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
