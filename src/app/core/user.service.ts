import 'firebase/storage';

import * as firebase from 'firebase';

import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Inject, Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseApp } from 'angularfire2';

@Injectable()
export class UserService {
    private uid: string;
    constructor(private db: AngularFireDatabase) {
    }

    getUsers() {
        return this.db.list('users');
    }
}

