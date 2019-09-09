import { IAuthService } from './../../../core/contracts/auth-servise-interface';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { AngularFireDatabase } from 'angularfire2/database';
import { Image } from '../../../shared/models/image';
import { ImageService } from '../../../core/image.service';
import { ToasterService } from 'angular2-toaster';

@Component({
  selector: 'app-image-edit',
  templateUrl: './image-edit.component.html',
  styleUrls: ['./image-edit.component.css']
})
// tslint:disable-next-line:one-line
export class ImageEditComponent implements OnInit {

  public uid: string;
  public image: any;
  public imgUrl;
  public imgDescription;
  public imgTitle;
  public imgAuthor;
  public imgAuthorID;
  public imgCategorie;

  editForm: FormGroup;

  constructor(private imageService: ImageService,
    private route: ActivatedRoute, private formBuilder: FormBuilder,
    private router: Router,
    private db: AngularFireDatabase,
    @Inject('IAuthService') private authService: IAuthService,
    private toasterService: ToasterService) { }

  ngOnInit() {
    this.uid = this.authService.currentUserId;
    this.getImageData(this.route.snapshot.params['id']);


    this.route.params.subscribe(params => {
      this.image = this.db.object('/gallery/' + params['id']);
    });
    this.buildForm();
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

        if (this.uid !== this.imgAuthorID ) {
          this.toasterService.pop('error', 'Unauthorized attempt', 'You are not authorized to access this page');
          this.router.navigate(['/login']);
        }
      });
  }

  buildForm(): void {
    this.editForm = new FormGroup({
      'title': new FormControl('', [Validators.required]),
      'description': new FormControl('', [Validators.required])
    });

    this.image.subscribe(img => {
      this.editForm.patchValue(img);
    });
  }

  saveChanges() {
    if (this.editForm.status !== 'VALID') {
      // console.log('form is not valid, cannot save to database');
      return;
    }

    const data = this.editForm.value;
    this.imageService.updateImage(this.image, data);
  }

  returnToImgDetails() {
    const id = this.route.snapshot.params['id'];
    this.router.navigate(['/image', id]);
  }
}
