import { Component, OnInit } from '@angular/core';

import { FirebaseListObservable } from 'angularfire2/database';
import { Image } from '../../shared/models/image';
import { ImageFilterPipe } from './../../shared/Pipes/filter-Images.pipe';
import { ReversePipe } from './../../shared/Pipes/filter-last-images.pipe';
import { ImageService } from './../../core/image.service';
// import { Observable } from 'rxjs/Observable';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import * as _ from 'lodash';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})

export class GalleryComponent implements OnInit  {
  // images: FirebaseListObservable<Image[]>;
  // filterBy?= 'all';
  // heading = 'Latest Photos';


  // constructor(private imageService: ImageService) { }

  // ngOnInit() {
  //   this.images = this.imageService.getImages();
  // }

  //   INFINITY SCROLL
  images = new BehaviorSubject([]);
  lastImage;
  lastImageKey;
  filterBy?= 'all';
  heading = 'All Photos';

  batch = 6;         // size of each query
  // lastKey = `${this.lastImageKey}`;      // key to offset next query from
  lastKey ;      // key to offset next query from
  finished = false;  // boolean when end of database is reached
  constructor(private imageService: ImageService) { }

  ngOnInit() {
    this.lastImage = this.imageService.getImagesList();
    this.lastImage.subscribe((list) => {
      this.lastImage = list[0];
      this.lastImageKey = this.lastImage.$key;
      console.log(this.lastImageKey);
      this.lastKey = this.lastImageKey;
      this.getImages();
    });

  }
  onScroll() {
    console.log('scrolled!!');
    this.getImages();
  }
  private getImages() {
    // tslint:disable-next-line:curly
    if (this.finished)
      return;
    // tslint:disable-next-line:curly
    else
      this.imageService
        .getImagesInfinityScroll(this.batch + 1, this.lastKey)
        .do(images => {

          // set the lastKey in preparation for next query
          this.lastKey = _.last(images)['$key'];
          const newImages = _.slice(images, 0, this.batch);

          /// Get current movies in BehaviorSubject
          const currentImages = this.images.getValue();

          /// If data is identical, stop making queries
          if (this.lastKey === _.last(newImages)['$key']) {
            this.finished = true;
          }

          /// Concatenate new movies to current movies
          this.images.next(_.concat(currentImages, newImages));
        })
        .take(1)
        .subscribe();
  }
}











