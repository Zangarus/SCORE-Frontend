import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {CardModule} from 'primeng/card';
import {ToolbarModule} from 'primeng/toolbar';
import {ButtonModule} from 'primeng/button';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './shell/app-header/app-header.component';
import { AppMainComponent } from './shell/app-main/app-main.component';
import { AppFooterComponent } from './shell/app-footer/app-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppMainComponent,
    AppFooterComponent
  ],
  imports: [
    BrowserModule,
    CardModule,
    ToolbarModule,
    ButtonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
