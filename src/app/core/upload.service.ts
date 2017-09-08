import * as _ from 'lodash';
import * as firebase from 'firebase';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { FileItem } from './../shared/models/file';
import { Image } from './../shared/models/image';
import { Injectable } from '@angular/core';
import { UPLOAD_FOLDER } from '../common/constants';

@Injectable()
export class Upload {
    constructor(public db: AngularFireDatabase) { }

    uploadImagesToFirebase(file: FileItem): string {
        const storageRef = firebase.storage().ref();
        file.isUploading = true;
        const uploadTask: firebase.storage.UploadTask = storageRef
            .child(`${UPLOAD_FOLDER}/${file.file.name}`)
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
                this.saveImage(file);
            }
        );

        return file.url;
    }

    private saveImage(file: FileItem) {
        this.db.list(`/${UPLOAD_FOLDER}`).push(file);
    }

    public deleteImage(path: string): firebase.Promise<any> {
        const storageRef = firebase.storage().ref();
        const desertRef = storageRef.child(`${UPLOAD_FOLDER}/${path}`);
        const deletion = desertRef.delete();

        return deletion;
    }
}
