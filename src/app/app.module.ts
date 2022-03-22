import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NumPadComponent } from './num-pad/num-pad.component';
import { NumTextComponent } from './num-text/num-text.component';

@NgModule({
  declarations: [
    AppComponent,
    NumPadComponent,
    NumTextComponent
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
