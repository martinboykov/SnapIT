// FOR TESTING THE CONNECTION WITH FIREBASE (FOR DELETION)
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-con-test',
  templateUrl: './con-test.component.html',
})
export class ConTestComponent implements OnInit {

  tests: FirebaseListObservable<any[]>;
  constructor(public db: AngularFireDatabase) {
    this.tests = db.list('tests');
  }

  ngOnInit() {
  }

}
