import { Image } from '../../../shared/models/image';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../../services/image.service';

@Component({
  selector: 'app-image-edit',
  templateUrl: './image-edit.component.html',
  styleUrls: ['./image-edit.component.css']
})
export class ImageEditComponent implements OnInit {

  constructor(private imageService: ImageService,
    private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
