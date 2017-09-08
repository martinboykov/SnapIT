import { FirebaseListObservable } from 'angularfire2/database';
import { ImageFilterPipe } from './../../shared/Pipes/filter-Images.pipe';
import { ImageService } from './../../services/image.service';
import { Component, OnInit, OnChanges } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Image } from '../../shared/models/image';
// import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})

export class GalleryComponent implements OnInit, OnChanges {
  images: FirebaseListObservable<Image[]>;
  filterBy?= 'all';
  heading = 'Latest Photos';


  constructor(private imageService: ImageService) { }

  ngOnInit() {
    this.images = this.imageService.getImages();
  }

  ngOnChanges() {
    this.images = this.imageService.getImages();
  }
}

//   INFINITY SCROLL
//   images = new BehaviorSubject([]);
//   batch = 2;         // size of each query
//   lastKey = '';      // key to offset next query from
//   finished = false;  // boolean when end of database is reached
//   constructor(private imageService: ImageService) { }
//   ngOnInit() {
//     this.getImages();
//   }
//   onScroll() {
//     console.log('scrolled!!');
//     this.getImages();
//   }
//   private getImages(key?) {
//     // tslint:disable-next-line:curly
//     if (this.finished)
//       return this.imageService
//         .getImages(this.batch + 1, this.lastKey)
//         .do(images => {
//           /// set the lastKey in preparation for next query
//           this.lastKey = images[images.length - 1]['$key'];
//           console.log(this.lastKey);

//           // this.lastKey = _.last(images)['$key'];
//           const newImages = images.slice(0, this.batch);
//           /// Get current movies in BehaviorSubject
//           const currentImages = this.images.getValue();
//           /// If data is identical, stop making queries
//           // if (this.lastKey === _.last(newImgaes)['$key']) {
//           if (this.lastKey === newImages[newImages.length - 1]['$key']) {
//             this.finished = true;
//           }
//           /// Concatenate new movies to current movies
//           const latestImages = currentImages.concat(newImages);
//           this.images.next(latestImages);
//         })
//         .take(1)
//         .subscribe();
//   }
// }
