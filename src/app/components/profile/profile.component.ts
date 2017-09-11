import { Image } from './../../shared/models/image';
import { FirebaseListObservable } from 'angularfire2/database';
import { ImageService } from './../../core/image.service';
import { Component, Inject, OnInit } from '@angular/core';

import { IAuthService } from '../../core/contracts/auth-servise-interface';
import { Router } from '@angular/router';
import { ReversePipe } from './../../shared/Pipes/filter-last-images.pipe';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {



  // get the data through a service from the database - hardcoded data only for test

  user;
  uid;
  userID: string;
  images;
  constructor( @Inject('IAuthService') private authService: IAuthService, private router: Router, private imageService: ImageService) { }

  getUserUploads() {
    // implement getting users uploads from DB when user is authenticated
  }

  getUserFavourites() {
    // implement getting users favourites from DB when user is authenticated
  }

  ngOnInit() {
    this.userID = this.authService.currentUserId;
    this.authService.getUser(this.userID).subscribe((userData) => {
      this.user = userData;
      this.uid = userData.uid;
      console.log(this.user.name);
      console.log(this.user.email);
    });


    this.imageService.getImagesList(({ equalTo: this.uid, orderByChild: 'authorID' })).subscribe(images => {
      this.images = images;
    });
  }
}
