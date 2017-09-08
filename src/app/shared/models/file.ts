export class FileItem {

  public constructor(
      public file: File,
      public url: string = '',
      public isUploading: boolean = false,
      public progress: number = 0) {
  }

}
