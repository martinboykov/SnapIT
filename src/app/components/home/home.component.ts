import { Component, Inject, OnInit } from '@angular/core';

import { FirebaseListObservable } from 'angularfire2/database';
import { IAuthService } from '../../core/contracts/auth-servise-interface';
import { Image } from './../../shared/models/image';
import { ImageService } from './../../core/image.service';
import { ReversePipe } from './../../shared/Pipes/filter-last-images.pipe';
import { concatMap } from 'rxjs/operator/concatMap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  images: Image[];
  imagesCarousel;
  imagesCarouselOne;
  imagesCarouselOneUrl;
  imagesCarouselTwo;
  imagesCarouselTwoUrl;
  imagesCarouselThree;
  imagesCarouselThreeUrl;
  loaded = false;

  constructor(@Inject('IAuthService') private authService: IAuthService, private imageService: ImageService) { }

  ngOnInit() {

    this.imagesCarousel = this.imageService.getImagesCarousel();
    this.imagesCarousel.
      concatMap((list: Image[]) => {
        this.imagesCarouselOne = list[0];
        this.imagesCarouselOneUrl = this.imagesCarouselOne.url;

        this.imagesCarouselTwo = list[1];
        this.imagesCarouselTwoUrl = this.imagesCarouselTwo.url;

        this.imagesCarouselThree = list[2];
        this.imagesCarouselThreeUrl = this.imagesCarouselThree.url;
        return this.imageService.getImagesList(({ limitToLast: 20 }));
      })
      .subscribe((list: Image[]) => {
        this.images = list.reverse();
        this.loaded = true;
      });
  }

  get isUserLoggedIn(): boolean {
    return this.authService.authenticated;
  }
}
