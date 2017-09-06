
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';

import { AngularFireModule } from 'angularfire2';
import { firebase } from '../environments/firebase';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components//shared/header/header.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { LoginComponent } from './components/auth/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { InfoComponent } from './components/info/info.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ImageComponent } from './components/gallery/image/image.component';
import { UploadComponent } from './components/upload/upload.component';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterComponent,
    ContactsComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    StatisticsComponent,
    InfoComponent,
    GalleryComponent,
    ImageComponent,
    UploadComponent,
    PageNotFoundComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebase),
    AngularFireDatabaseModule,
    AppRoutingModule,
    AngularFireAuthModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
