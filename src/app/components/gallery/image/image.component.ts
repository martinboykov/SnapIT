import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../../services/image.service';


@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  private imageUrl = '';

  constructor(private imageService: ImageService,
    private route: ActivatedRoute) { }

  getImageUrl(key: string) {
    this.imageService.getImage(key)
      .then(image => this.imageUrl = image.url);
  }

  ngOnInit() {
    this.getImageUrl(this.route.snapshot.params['id']);
  }
}
