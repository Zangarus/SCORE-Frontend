import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';


import {CardModule} from 'primeng/card';
import {ToolbarModule} from 'primeng/toolbar';
import {ButtonModule} from 'primeng/button';
import {MenuModule} from 'primeng/menu';
import {FormsModule} from '@angular/forms';
import {DropdownModule} from 'primeng/dropdown';
import {KnobModule} from 'primeng/knob';
import {ProgressBarModule} from 'primeng/progressbar';
import {DialogModule} from 'primeng/dialog';
import {PasswordModule} from 'primeng/password';
import {InputTextModule} from 'primeng/inputtext';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './shell/app-header/app-header.component';
import { AppMainComponent } from './shell/app-main/app-main.component';
import { AppFooterComponent } from './shell/app-footer/app-footer.component';
import { AppHomeComponent } from './views/app-home/app-home.component';
import { AppWelcomeComponent } from './views/app-welcome/app-welcome.component';
import { AppProfileComponent } from './views/app-profile/app-profile.component';
import { AppRankingComponent } from './views/app-ranking/app-ranking.component';
import { AppStatisticsComponent } from './views/app-statistics/app-statistics.component';
import { ApiService } from './service/http.service';


@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppMainComponent,
    AppFooterComponent,
    AppHomeComponent,
    AppWelcomeComponent,
    AppProfileComponent,
    AppRankingComponent,
    AppStatisticsComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CardModule,
    ToolbarModule,
    ButtonModule,
    AppRoutingModule,
    MenuModule,
    FormsModule,
    DropdownModule,
    KnobModule,
    ProgressBarModule,
    DialogModule,
    PasswordModule,
    FormsModule,
    HttpClientModule,
    InputTextModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
