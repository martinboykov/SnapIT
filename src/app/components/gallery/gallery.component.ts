import { ImageFilterPipe } from './../../shared/Pipes/filter-Images.pipe';
import { ImageService } from './../../services/image.service';
import { Component, OnInit, OnChanges } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Image } from '../../shared/models/image.model';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})

export class GalleryComponent implements OnInit, OnChanges {
  images: Observable<Image[]>;
  filterBy? = 'all';


  constructor(private imageService: ImageService, private imageFilter: ImageFilterPipe) { }

  ngOnInit() {
    this.images = this.imageService.getImages();
  }

  ngOnChanges() {
    this.images = this.imageService.getImages();
  }
}
