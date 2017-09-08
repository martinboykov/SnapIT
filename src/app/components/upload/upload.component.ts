import * as files from 'lodash';

import { Component, OnInit } from '@angular/core';

import { DEFAULT_SELECT_STATUS } from './../../common/constants';
import { FileItem } from '../../shared/models/file';
import { Upload as UploadService } from '../../services/upload.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {

  filesToUpload: FileList;
  uploadedFiles: Array<FileItem>;
  currentFile: FileItem;
  selectStatus: string;
  constructor(private imagesService: UploadService) {
    this.selectStatus = DEFAULT_SELECT_STATUS;
    this.uploadedFiles = new Array<FileItem>();
    console.log(this.uploadedFiles);
  }

  handleFiles(event) {
    this.filesToUpload = event.target.files;

    this.selectStatus = this.filesToUpload.length > 1
    ? this.filesToUpload.length + ' files selected.'
    : this.filesToUpload[0].name;
  }

  uploadFiles() {
    const filesIndexes = files.range(this.filesToUpload.length);
    files.each(filesIndexes, (idx) => {
      this.currentFile = new FileItem(this.filesToUpload[idx]);
       this.imagesService.uploadImagesToFirebase(this.currentFile);
       this.uploadedFiles.push(this.currentFile);
    });
  }

  deleteFile(name) {
    this.imagesService.deleteImage(name)
    .then(() => {
      this.uploadedFiles = this.uploadedFiles.filter(f => f.file.name !== name);
    });
  }
}
