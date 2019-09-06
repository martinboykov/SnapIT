import 'rxjs/add/operator/do';
import 'rxjs/add/operator/take';

import * as _ from 'lodash';

import { Component, OnInit } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { FirebaseListObservable } from 'angularfire2/database';
import { Image } from '../../shared/models/image';
import { ImageFilterPipe } from './../../shared/Pipes/filter-Images.pipe';
import { ImageService } from './../../core/image.service';
import { ReversePipe } from './../../shared/Pipes/filter-last-images.pipe';
import { Subject } from 'rxjs';
import { filter } from 'rxjs/operator/filter';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})

export class GalleryComponent implements OnInit {
  categorySubject = new Subject();
  category = 'all';
  images: Image[];
  filterImages: Image[];
  heading = 'All Photos';

  // Scroller
  imagesScroller: Image[];
  currentImageScroller = 1;
  itemsPerScroll = 12;
  throttle = 750;
  scrollDistance = 3;
  totalItems = 0;
  finished = false;  // boolean when end of database is reached
  loaded = false;

  constructor(private imageService: ImageService) { }

  ngOnInit() {
    this.imageService.getImagesList(({
      // orderByChild: 'category',
      // equalTo: null,
      // orderByChild: 'categorie',
      // equalTo: 'Portrait',
      // limitToLast: 3,
    }))
      .subscribe((list: Image[]) => {
        this.images = list.reverse();
        this.filterImages = this.images.slice();
        this.totalItems = list.length;
        this.imagesScroller = this.images.slice(0, this.itemsPerScroll);
        this.loaded = true;
      });
    this.categorySubject
      .subscribe((val: string) => {
        this.filterImages = this.images.filter((image) => {
          if (val === 'all') {
            return true;
          }
          return image.categorie === val;
        });
        this.imagesScroller = this.filterImages.slice(0, this.itemsPerScroll);
        this.totalItems = this.filterImages.length;
        setTimeout(() => {
          this.finished = this.totalItems < this.itemsPerScroll ? true : false;
        }, 500);
        this.category = val;
      });
  }
  onScroll() {
    if (this.imagesScroller.length >= this.totalItems) {
      this.finished = true;
      return;
    }
    this.currentImageScroller += 1;
    const nextImages = this.filterImages.slice(this.imagesScroller.length, this.imagesScroller.length + this.itemsPerScroll);
    this.imagesScroller = [...this.imagesScroller, ...nextImages];
  }

  changeCategory(category) {
    this.finished = false;
    this.categorySubject.next(category);
  }
}
