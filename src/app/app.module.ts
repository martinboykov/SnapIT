import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { ContactsComponent } from './components/contacts/contacts.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { HeaderComponent } from './components//shared/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ImageDetailComponent } from './components/gallery/image-detail/image-detail.component';
import { ImageEditComponent } from './components/gallery/image-edit/image-edit.component';
import { ImageFilterPipe } from './shared/Pipes/filter-Images.pipe';
import { ImageService } from './services/image.service';
import { InfoComponent } from './components/info/info.component';
import { LoginComponent } from './components/auth/login/login.component';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { Upload } from './services/upload.service';
import { UploadComponent } from './components/upload/upload.component';
import { firebase } from '../environments/firebase';

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
    ImageDetailComponent,
    ImageEditComponent,
    UploadComponent,
    PageNotFoundComponent,
    ProfileComponent,
    ImageFilterPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebase),
    AngularFireDatabaseModule,
    AppRoutingModule,
    AngularFireAuthModule,
    // InfiniteScrollModule
  ],
  providers: [AuthService, AuthGuard,  ImageService, Upload],
  bootstrap: [AppComponent]
})
export class AppModule { }
