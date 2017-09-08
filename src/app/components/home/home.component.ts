import { FirebaseListObservable } from 'angularfire2/database';
import { Image } from './../../shared/models/image';
import { ImageService } from './../../services/image.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {
  images: FirebaseListObservable<Image[]>;

  constructor(private authService: AuthService, private imageService: ImageService) { }

  ngOnInit() {
    this.images = this.imageService.getImagesList(({limitToLast: 12}));
  }


}
