import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ChartModule } from 'primeng/chart';


import { CardModule } from 'primeng/card';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { KnobModule } from 'primeng/knob';
import { ProgressBarModule } from 'primeng/progressbar';
import { DialogModule } from 'primeng/dialog';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {InputNumberModule} from 'primeng/inputnumber';

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
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { MessageService } from 'primeng/api';


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
    AppStatisticsComponent,

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
    InputTextModule,
    TableModule,
    MessageModule,
    MessagesModule,
    ProgressBarModule,
    ChartModule,
    ToastModule,
    InputNumberModule
  ],
  providers: [
    ApiService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
