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

  constructor(private imageService: ImageService) { }

  ngOnInit() {
    this.images = this.imageService.getImages();
  }

  ngOnChanges() {
    this.images = this.imageService.getImages();
  }
}
