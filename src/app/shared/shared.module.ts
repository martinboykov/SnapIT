import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ImageFilterPipe } from './Pipes/filter-Images.pipe';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UploadComponent } from './components/upload/upload.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    ImageFilterPipe,
    PageNotFoundComponent,
    UploadComponent
  ],
  exports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    ImageFilterPipe,
    PageNotFoundComponent,
    UploadComponent
  ]
})
export class SharedModule {

}
