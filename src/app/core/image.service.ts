import 'firebase/storage';

import * as firebase from 'firebase';

import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Inject, Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseApp } from 'angularfire2';
import { IAuthService } from './contracts/auth-servise-interface';
import { Image } from '../shared/models/image';
import { Observable } from 'rxjs/Rx';
import { UserData } from './../shared/models/user';

@Injectable()
export class ImageService {
  private uid: string;

  userName: string;
  images: FirebaseListObservable<Image[]>;

  constructor(
    private angularFireAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    @Inject('IAuthService') private authService: IAuthService) {
    this.angularFireAuth.authState.subscribe(auth => {
      if (auth !== undefined && auth !== null) {
        this.uid = auth.uid;

      }
    });
  }
  // INFINITI SCROLL
  getImagesInfinityScroll(batch, lastKey?) {
    const query = {
      orderByKey: true,
      limitToFirst: batch,
    };
    if (lastKey) {
      query['startAt'] = lastKey;
      return this.db.list('gallery', {
        query
      });
    }
  }

  saveImage(image: Image) {
    image.authorID = this.uid;
    this.db.list(`/gallery`).push(image);
    // this.db.list(`users/${this.uid}/images`)(image);
  }
  saveImageCarousel(image: Image) {
    image.authorID = this.uid;
    this.db.list(`/carousel`).push(image);
    // this.db.list(`users/${this.uid}/images`)(image);
  }

  getImages(): FirebaseListObservable<Image[]> {
    return this.db.list('gallery');
  }
  getImagesCarousel(): FirebaseListObservable<Image[]> {
    return this.db.list('carousel');
  }


  getImage(key: string) {
    return firebase.database().ref('gallery/' + key).once('value')
      .then((snap) => snap.val());
  }
  getImageCarousel(key: string) {
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

