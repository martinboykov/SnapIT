// import * as _ from 'lodash';
import * as firebase from 'firebase';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { FileItem } from './../shared/models/file';
import { Image } from './../shared/models/image';
import { Injectable } from '@angular/core';
import { UPLOAD_FOLDER } from '../shared/constants';
import { UPLOAD_FOLDER_CAROUSEL } from '../shared/constants';

@Injectable()
export class Upload {
    constructor(public db: AngularFireDatabase) { }

    uploadImagesToFirebase(file: FileItem): string {
        const storageRef = firebase.storage().ref();
        file.isUploading = true;
        const uploadTask: firebase.storage.UploadTask = storageRef
            .child(`${UPLOAD_FOLDER}/${file.file.name}`)
            // .child(`${UPLOAD_FOLDER_CAROUSEL}/${file.file.name}`)
            .put(file.file);

        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
            (snapshot) => {
                file.progress = (uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes) * 100;

                // tslint:disable-next-line:no-bitwise
                file.progress |= 0;
            },
            (error) => { },
            (): any => {
                file.url = uploadTask.snapshot.downloadURL;
                file.isUploading = false;
            }
        );

        console.log(file.url);
        return file.url;
    }

    public deleteUpload(name: string): firebase.Promise<any> {
        const storageRef = firebase.storage().ref();
        const desertRef = storageRef.child(`${UPLOAD_FOLDER}/${name}`);
        const deletion = desertRef.delete();
        return deletion;
    }
}
