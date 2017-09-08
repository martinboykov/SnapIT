import { Image } from '../../../shared/models/image';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../../services/image.service';



@Component({
  selector: 'app-image',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit {
  public image: Image;
  public imageUrl;


  constructor(private imageService: ImageService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.getImageUrl(this.route.snapshot.params['id']);
  }
  getImageUrl(key: string) {
    this.imageService.getImage(key)
      .then(image => this.imageUrl = image.url);
  }
  edit() {

  }
  delete() {

  }
}
