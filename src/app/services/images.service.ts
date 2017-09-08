import * as _ from 'lodash';
import * as firebase from 'firebase';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { FileItem } from './../shared/models/file';
import { Injectable } from '@angular/core';
import { PictureData } from './../shared/models/picture';

@Injectable()
export class Images {

    private IMAGES_FOLDER = 'images';

    constructor(public af: AngularFireDatabase) { }

    uploadImagesToFirebase(file: FileItem) {
        const storageRef = firebase.storage().ref();

        file.isUploading = true;
            const uploadTask: firebase.storage.UploadTask = storageRef
                .child(`${this.IMAGES_FOLDER}/${file.file.name}`)
                .put(file.file);

            uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
                (snapshot) => {
                    file.progress = (uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes) * 100;                  },
                (error) => { },
                () => {
                    file.url = uploadTask.snapshot.downloadURL;
                    file.isUploading = false;
                    this.saveImage(new PictureData);
                }
            );
    }

    private saveImage(image: PictureData) {
        this.af.list(`/${this.IMAGES_FOLDER}`).push(image);
    }

}
