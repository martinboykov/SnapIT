import { AngularFireDatabase } from 'angularfire2/database';
import { Image } from '../../../shared/models/image';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../../services/image.service';



@Component({
  selector: 'app-image',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit {
  public image: any;
  public imgUrl;
  public imgDescription;
  public imgTitle;
  public imgAuthor;
  public imgDate;


  constructor(private imageService: ImageService,
    private route: ActivatedRoute, private router: Router, private db: AngularFireDatabase) { }

  ngOnInit() {
    this.getImageData(this.route.snapshot.params['id']);
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
        this.imgDate = image.date;
      });
  }
  edit() {
    this.router.navigate(['edit'], { relativeTo: this.route });

  }
  returnToGallery() {
    this.router.navigate(['/gallery']);
  }
}
