import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './core/auth-guard.service';
import { GalleryComponent } from './components/gallery/gallery.component';
import { HomeComponent } from './components/home/home.component';
import { ImageDetailComponent } from './components/gallery/image-detail/image-detail.component';
import { ImageEditComponent } from './components/gallery/image-edit/image-edit.component';
import { AboutComponent } from './components/static/about/about.component';
import { LoginComponent } from './components/auth/login/login.component';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { UploadComponent } from './shared/components/upload/upload.component';
import { ContactsComponent } from './components/static/contacts/contacts.component';

// import { CommonModule } from '@angular/common';


const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'statistics', component: StatisticsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'image/:id', component: ImageDetailComponent },
  { path: 'image/:id/edit', component: ImageEditComponent, canActivate: [AuthGuard]  },
  { path: 'upload', component: UploadComponent, canActivate: [AuthGuard]  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile/:id', component: ProfileComponent },
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
