import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { CommonModule } from '@angular/common';

import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';
import { ImageComponent } from './components/gallery/image/image.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { LoginComponent } from './components/auth/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UploadComponent } from './components/upload/upload.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { InfoComponent } from './components/info/info.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { HomeComponent } from './components/home/home.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'statistics', component: StatisticsComponent },
  { path: 'info', component: InfoComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'upload', component: UploadComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'image', component: ImageComponent },
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/page-not-found' },

];

@NgModule({
  imports: [
    // CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
