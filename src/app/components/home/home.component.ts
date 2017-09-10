import { Component, OnInit } from '@angular/core';

import { AuthService } from './../../core/auth.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Image } from './../../shared/models/image';
import { ImageService } from './../../core/image.service';
import { ReversePipe } from './../../shared/Pipes/filter-last-images.pipe';

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

  get isUserLoggedIn(): boolean{
    return this.authService.authenticated;
  }
}
