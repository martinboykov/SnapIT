import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, Inject, OnInit } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';
import { IAuthService } from '../../../core/contracts/auth-servise-interface';
import { Image } from '../../../shared/models/image';
import { ImageService } from '../../../core/image.service';

@Component({
  selector: 'app-image',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit {
  public uid: any;
  public image: any;
  public imageKey;
  public imgUrl;
  public imgDescription;
  public imgTitle;
  public imgAuthor;
  public imgAuthorID;
  public imgCategorie;
  public editAuthorOnly = false;


  constructor(
    private imageService: ImageService,
    private route: ActivatedRoute,
    private router: Router,
    private db: AngularFireDatabase,
    @Inject('IAuthService') private authService: IAuthService) { }

  ngOnInit() {
    this.uid = this.authService.currentUserId;
    this.getImageData(this.route.snapshot.params['id']);
    this.imageKey = this.route.snapshot.params['id'];
    this.route.params.subscribe(params => {
      this.image = this.db.object('/gallery/' + params['id']);
    });
  }
  getImageData(key: string) {
    this.imageService.getImage(key)
      .then(image => {
        this.imgUrl = image.url;

        this.imgDescription = image.description;
        this.imgTitle = image.title;
        this.imgAuthor = image.author;
        this.imgAuthorID = image.authorID;
        this.imgCategorie = image.categorie;
        console.log(this.imageKey);
        console.log(this.uid);
        console.log(this.imgAuthorID);

        if (this.imgAuthorID === this.uid) {
          this.editAuthorOnly = true;
        }
      });

  }
  edit() {
    this.router.navigate(['edit'], { relativeTo: this.route });

  }
  returnToGallery() {
    this.router.navigate(['/gallery']);
  }
  delete() {
    this.imageService.deleteImage(this.imageKey);
    this.router.navigate(['/gallery']);
  }
}
