;
import { ProfileComponent } from './profile/profile.component'import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';


import { AngularFireModule } from 'angularfire2';
import { firebase } from '../environments/firebase';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components//shared/header/header.component';
import { RegisterComponent } from './components/auth/register/register.component';
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
import { [name]Component } from './[name]/[name].component';


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
    [name]Component, ProfileComponent,

  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebase),
    AngularFireDatabaseModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
