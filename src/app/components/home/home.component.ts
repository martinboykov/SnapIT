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
export class HomeComponent implements OnInit {
  images: FirebaseListObservable<Image[]>;
  imagesCarousel;
  imagesCarouselOne;
  imagesCarouselOneUrl;
  imagesCarouselTwo;
  imagesCarouselTwoUrl;
  imagesCarouselThree;
  imagesCarouselThreeUrl;


  constructor( @Inject('IAuthService') private authService: IAuthService, private imageService: ImageService) { }

  ngOnInit() {
    this.images = this.imageService.getImagesList(({ limitToLast: 12 }));
    this.imagesCarousel = this.imageService.getImagesCarousel();
    this.imagesCarousel.subscribe((list) => {
      this.imagesCarouselOne = list[0];
      this.imagesCarouselOneUrl = this.imagesCarouselOne.url;
      console.log(this.imagesCarouselOneUrl);

      this.imagesCarouselTwo = list[1];
      this.imagesCarouselTwoUrl = this.imagesCarouselTwo.url;
      console.log(this.imagesCarouselTwoUrl);

      this.imagesCarouselThree = list[2];
      this.imagesCarouselThreeUrl = this.imagesCarouselThree.url;
      console.log(this.imagesCarouselThreeUrl);
    });
  }

  get isUserLoggedIn(): boolean {
    return this.authService.authenticated;
  }
}
