import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {CardModule} from 'primeng/card';
import {ToolbarModule} from 'primeng/toolbar';
import {ButtonModule} from 'primeng/button';
import {MenuModule} from 'primeng/menu';
import {FormsModule} from '@angular/forms';
import {DropdownModule} from 'primeng/dropdown';
import {KnobModule} from 'primeng/knob';
import {ProgressBarModule} from 'primeng/progressbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './shell/app-header/app-header.component';
import { AppMainComponent } from './shell/app-main/app-main.component';
import { AppFooterComponent } from './shell/app-footer/app-footer.component';
import { AppRegisterComponent } from './dialogs/app-register/app-register.component';
import { AppHomeComponent } from './views/app-home/app-home.component';
import { AppWelcomeComponent } from './views/app-welcome/app-welcome.component';
import { AppLoginComponent } from './dialogs/app-login/app-login.component';
import { AppProfileComponent } from './views/app-profile/app-profile.component';
import { AppRankingComponent } from './views/app-ranking/app-ranking.component';
import { AppStatisticsComponent } from './views/app-statistics/app-statistics.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppMainComponent,
    AppFooterComponent,
    AppRegisterComponent,
    AppHomeComponent,
    AppWelcomeComponent,
    AppLoginComponent,
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
    ProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }