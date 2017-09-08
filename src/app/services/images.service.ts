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

    uploadImagesToFirebase(file: FileItem): string {
        const storageRef = firebase.storage().ref();

        file.isUploading = true;
        const uploadTask: firebase.storage.UploadTask = storageRef
            .child(`${this.IMAGES_FOLDER}/${file.file.name}`)
            .put(file.file);

        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
            (snapshot) => {
                file.progress = (uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes) * 100;

                // tslint:disable-next-line:no-bitwise
                file.progress |= 0;
            },
            (error) => { },
            () => {
                file.url = uploadTask.snapshot.downloadURL;
                console.log(file.url);
                file.isUploading = false;
                this.saveImage(new PictureData);
            }
        );

        return file.url;
    }

    private saveImage(image: PictureData) {
        this.af.list(`/${this.IMAGES_FOLDER}`).push(image);
    }

    public deleteImage(path: string): firebase.Promise<any> {
        const storageRef = firebase.storage().ref();
        const desertRef = storageRef.child(`${this.IMAGES_FOLDER}/${path}`);
        const deletion = desertRef.delete();

        return deletion;
    }

}
