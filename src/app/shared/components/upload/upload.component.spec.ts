import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { AppModule } from './../../../app.module';
import { AppRoutingModule } from './../../../app-routing.module';
import { FooterComponent } from './../footer/footer.component';
import { HeaderComponent } from './../header/header.component';
import { ImageFilterPipe } from './../../Pipes/filter-Images.pipe';
import { PageNotFoundComponent } from './../page-not-found/page-not-found.component';
import { UploadComponent } from './upload.component';

describe('UploadComponent', () => {
  let component: UploadComponent;
  let fixture: ComponentFixture<UploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        AppRoutingModule,
        AppModule
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
