import { AngularFireDatabase } from 'angularfire2/database';
import { ImageService } from './../../core/image.service';
import { UserService } from './../../core/user.service';
import { Component, OnInit } from '@angular/core';
import 'firebase/storage';

import * as firebase from 'firebase';


@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  lengthUsers = 0;
  lengthLandscape = 0;
  lengthAnimals = 0;
  lengthArchitecture = 0;
  lengthPortrait = 0;
  lengthOther = 0;
  lengthAll = 0;
  results: Array<Object>;
  constructor(private imageService: ImageService,
    private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe(img => { img.forEach(image => { this.lengthUsers++; }); });
    this.imageService.getImages()
      .subscribe(img => { img.forEach(image => { this.lengthAll = this.lengthAll + 1; }); });

    this.imageService.getImages()
      .subscribe(img => {
        img.forEach(image => {
          if (image.categorie === 'Landscape') {
            this.lengthLandscape = this.lengthLandscape + 1;
          }
        });
      });
    this.imageService.getImages()
      .subscribe(img => {
        img.forEach(image => {
          if (image.categorie === 'Animals') {
            this.lengthAnimals = this.lengthAnimals + 1;
          }
        });
      });
    this.imageService.getImages()
      .subscribe(img => {
        img.forEach(image => {
          if (image.categorie === 'Architecture') {
            this.lengthArchitecture = this.lengthArchitecture + 1;
          }
        });
      });

    this.imageService.getImages()
      .subscribe(img => {
        img.forEach(image => {
          if (image.categorie === 'Portrait') {
            this.lengthPortrait = this.lengthPortrait + 1;
          }
        });
      });

    this.imageService.getImages()
      .subscribe(img => {
        img.forEach(image => {
          if (image.categorie === 'Other') {
            this.lengthOther = this.lengthOther + 1;
          }
        });
      });

  }
}
