import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestBed, async } from '@angular/core/testing';

import { APP_BASE_HREF } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { ContactsComponent } from './components/contacts/contacts.component';
import { CoreModule } from './core/core.module';
import { FooterComponent } from './shared/components/footer/footer.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ImageDetailComponent } from './components/gallery/image-detail/image-detail.component';
import { ImageEditComponent } from './components/gallery/image-edit/image-edit.component';
import { InfoComponent } from './components/info/info.component';
import { LoginComponent } from './components/auth/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { SharedModule } from './shared/shared.module';
import { StatisticsComponent } from './components/statistics/statistics.component';

describe('AppComponent', () => {

  beforeEach((() => {
    TestBed.configureTestingModule({
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
        ProfileComponent
      ],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        CoreModule.forRoot(),
        SharedModule
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' }
      ]
    }).compileComponents();
  }));

});
