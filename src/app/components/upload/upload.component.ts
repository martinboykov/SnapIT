import * as files from 'lodash';

import { Component, OnInit } from '@angular/core';

import { FileItem } from '../../shared/models/file';
import { Images as ImagesService } from '../../services/images.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {

  filesToUpload: FileList;
  currentFile: FileItem;
  selectStatus: string;
  constructor(private imagesService: ImagesService) { }

  handleFiles(event) {
    this.filesToUpload = event.target.files;

    this.selectStatus = this.filesToUpload.length > 1
    ? this.filesToUpload.length + ' files selected.'
    : this.filesToUpload[0].name;

    console.log(this.selectStatus);
  }

  uploadFiles() {
    const filesIndexes = files.range(this.filesToUpload.length);
    files.each(filesIndexes, (idx) => {
      this.currentFile = new FileItem(this.filesToUpload[idx]);
      this.imagesService.uploadImagesToFirebase(this.currentFile);
    });
  }
}
