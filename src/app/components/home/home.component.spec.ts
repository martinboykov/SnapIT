import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { APP_BASE_HREF } from '@angular/common';
import { AppRoutingModule } from './../../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { ContactsComponent } from './../contacts/contacts.component';
import { CoreModule } from './../../core/core.module';
import { GalleryComponent } from './../gallery/gallery.component';
import { HomeComponent } from './home.component';
import { ImageDetailComponent } from './../gallery/image-detail/image-detail.component';
import { ImageEditComponent } from './../gallery/image-edit/image-edit.component';
import { InfoComponent } from './../info/info.component';
import { LoginComponent } from './../auth/login/login.component';
import { ProfileComponent } from './../profile/profile.component';
import { RegisterComponent } from './../auth/register/register.component';
import { SharedModule } from './../../shared/shared.module';
import { StatisticsComponent } from './../statistics/statistics.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
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
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
