import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { firebase } from '../environments/firebase';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { ConTestComponent } from './con-test/con-test.component'; // FOR TESTING THE CONNECTION WITH FIREBASE (FOR DELETION)
@NgModule({
  declarations: [
    AppComponent,
    ConTestComponent // FOR TESTING THE CONNECTION WITH FIREBASE (FOR DELETION)
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
