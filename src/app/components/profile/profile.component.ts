import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  // get the data through a service from the database - hardcoded data only for test
  id = 1;
  logged;
  user: Object;
  userID: string;
  username = 'Misha_90';
  firstName = 'Mihaela';
  lastName = 'Ivanova';
  email = 'myemail@gmail.com';
  uploads = ['The Girl', 'The Boy', 'Some Other Photo'];
  favourites = ['The Tree', 'Lonely Man', 'Sunset over Alaska', 'Sea Storm'];
  profilePicUrl = 'http://enadcity.org/enadcity/wp-content/uploads/2017/02/profile-pictures.png';
  editHref = 'user/edit/' + this.id;

  constructor(private authService: AuthService, private router: Router) { }

  getUserUploads() {
    // implement getting users uploads from DB when user is authenticated
  }

  getUserFavourites() {
    // implement getting users favourites from DB when user is authenticated
  }

  ngOnInit() {
    this.user = this.authService._currentUser;
  }
}
