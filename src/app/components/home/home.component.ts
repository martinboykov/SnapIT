import { Component, Inject, OnInit } from '@angular/core';

import { FirebaseListObservable } from 'angularfire2/database';
import { IAuthService } from '../../core/contracts/auth-servise-interface';
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

  constructor(@Inject('IAuthService') private authService: IAuthService, private imageService: ImageService) { }

  ngOnInit() {
    this.images = this.imageService.getImagesList(({limitToLast: 12}));
  }

  get isUserLoggedIn(): boolean{
    return this.authService.authenticated;
  }
}
