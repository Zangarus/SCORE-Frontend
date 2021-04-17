import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppHomeComponent } from './views/app-home/app-home.component';
import { AppProfileComponent } from './views/app-profile/app-profile.component';
import { AppRankingComponent } from './views/app-ranking/app-ranking.component';
import { AppStatisticsComponent } from './views/app-statistics/app-statistics.component';
import { AppWelcomeComponent } from './views/app-welcome/app-welcome.component';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: AppWelcomeComponent },
  { path: 'profile', component: AppProfileComponent },
  { path: 'ranking', component: AppRankingComponent },
  { path: 'statistics', component: AppStatisticsComponent },
  { path: 'home', component: AppHomeComponent },
  { path: '**', redirectTo: '/welcome', pathMatch: 'full'  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
