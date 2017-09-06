import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  id = 1;
  username = 'Misha_90';
  firstName = 'Mihaela';
  lastName = 'Ivanova';
  email = 'myemail@gmail.com';
  uploads = ['The Girl', 'The Boy', 'Some Other Photo'];
  favourites = ['The Tree', 'Lonely Man', 'Sunset over Alaska', 'Sea Storm'];
  profilePicUrl = 'http://enadcity.org/enadcity/wp-content/uploads/2017/02/profile-pictures.png';
  editHref = 'user/edit/' + this.id;
  constructor() { }

  ngOnInit() {
  }
}
