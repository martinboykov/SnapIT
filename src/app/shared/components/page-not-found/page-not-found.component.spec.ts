import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { AppComponent } from './../../../app.component';
import { AppModule } from './../../../app.module';
import { AppRoutingModule } from './../../../app-routing.module';
import { FooterComponent } from './../footer/footer.component';
import { HeaderComponent } from './../header/header.component';
import { ImageFilterPipe } from './../../Pipes/filter-Images.pipe';
import { PageNotFoundComponent } from './page-not-found.component';
import { SharedModule } from './../../shared.module';
import { UploadComponent } from './../upload/upload.component';

describe('PageNotFoundComponent', () => {
  let component: PageNotFoundComponent;
  let fixture: ComponentFixture<PageNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
        AppModule
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
