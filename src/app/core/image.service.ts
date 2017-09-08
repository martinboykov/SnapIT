import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { FirebaseApp } from 'angularfire2';
import 'firebase/storage';
import { Image } from '../shared/models/image';
import * as firebase from 'firebase';

@Injectable()
export class ImageService {
  private uid: string;
  images: FirebaseListObservable<Image[]>;

  constructor(private angularFireAuth: AngularFireAuth, private db: AngularFireDatabase) {
    this.angularFireAuth.authState.subscribe(auth => {
      if (auth !== undefined && auth !== null) {
        this.uid = auth.uid;
      }
    });
  }

  getImages(): FirebaseListObservable<Image[]> {
    return this.db.list('gallery');
  }

  getImage(key: string) {
    return firebase.database().ref('gallery/' + key).once('value')
      .then((snap) => snap.val());
  }
  getImagesList(query = {}): FirebaseListObservable<Image[]> {
    this.images = this.db.list('/gallery', {
      query: query
    });
    return this.images;
  }

  updateImage(image: FirebaseObjectObservable<Image>, data: any) {
    return image.update(data);
  }
  deleteImage(key: string): void {
    this.images.remove(key)
      .catch(error => console.log(error));
  }
}
  // INFINITI SCROLL
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
