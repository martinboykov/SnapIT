import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { ContactsComponent } from './components/static/contacts/contacts.component';
import { CoreModule } from './core/core.module';
import { GalleryComponent } from './components/gallery/gallery.component';
import { HomeComponent } from './components/home/home.component';
import { ImageDetailComponent } from './components/gallery/image-detail/image-detail.component';
import { ImageEditComponent } from './components/gallery/image-edit/image-edit.component';
import { ImageFilterPipe } from './shared/Pipes/filter-Images.pipe';
import { InfoComponent } from './components/info/info.component';
import { LoginComponent } from './components/auth/login/login.component';
import { NgModule } from '@angular/core';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { SharedModule } from './shared/shared.module';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { AboutComponent } from './components/static/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ContactsComponent,
    LoginComponent,
    HomeComponent,
    StatisticsComponent,
    InfoComponent,
    GalleryComponent,
    ImageDetailComponent,
    ImageEditComponent,
    ProfileComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CoreModule.forRoot(),
    SharedModule
    // InfiniteScrollModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
