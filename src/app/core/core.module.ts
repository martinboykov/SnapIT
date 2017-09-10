import { UserService } from './user.service';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';

import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
import { CommonModule } from '@angular/common';
import { ImageService } from './image.service';
import { Upload } from './upload.service';
import { firebase } from '../../environments/firebase';

@NgModule({
  imports: [
    AngularFireModule.initializeApp(firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  declarations: [],
  providers: [
    {provide: 'IAuthService', useClass: AuthService},
    {provide: AuthGuard, useClass: AuthGuard},
    {provide: ImageService, useClass: ImageService},
    { provide: UserService, useClass: UserService },
    {provide: Upload, useClass: Upload}
    ]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('Core module already provided! Please provide it only in the App Module!');
    }
  }
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
    };
  }
}
