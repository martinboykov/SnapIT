import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { APP_BASE_HREF } from '@angular/common';
import { AboutComponent } from './../../static/about/about.component';
import { AppRoutingModule } from './../../../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { ContactsComponent } from './../../static/contacts/contacts.component';
import { CoreModule } from './../../../core/core.module';
import { GalleryComponent } from './../gallery.component';
import { HomeComponent } from './../../home/home.component';
import { ImageDetailComponent } from './../image-detail/image-detail.component';
import { ImageEditComponent } from './image-edit.component';
import { InfoComponent } from './../../info/info.component';
import { LoginComponent } from './../../auth/login/login.component';
import { ProfileComponent } from './../../profile/profile.component';
import { RegisterComponent } from './../../auth/register/register.component';
import { SharedModule } from './../../../shared/shared.module';
import { StatisticsComponent } from './../../statistics/statistics.component';

describe('ImageEditComponent', () => {
  let component: ImageEditComponent;
  let fixture: ComponentFixture<ImageEditComponent>;

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
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
