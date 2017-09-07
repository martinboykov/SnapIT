import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { FirebaseApp } from 'angularfire2';
import 'firebase/storage';
import { Image } from '../shared/models/image';
import * as firebase from 'firebase';

@Injectable()
export class ImageService {
  private uid: string;

  constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase) {
    this.afAuth.authState.subscribe(auth => {
      if (auth !== undefined && auth !== null) {
        this.uid = auth.uid;
      }
    });
  }

  getImages(): Observable<Image[]> {
    return this.db.list('gallery');
  }

  getImage(key: string) {
    return firebase.database().ref('gallery/' + key).once('value')
      .then((snap) => snap.val());
  }

  // getImages(batch, lastKey?) {
  //   const query = {
  //     orderByKey: true,
  //     limitToFirst: batch,
  //   };
  //   if (lastKey) {
  //   query['startAt'] = lastKey;
  //     return this.db.list('gallery', {
  //       query
  //     });
  //   }
  // }
}
