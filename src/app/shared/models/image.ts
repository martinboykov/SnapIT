export class Image {
    $key?: string;
    name?: string;
    url?: string;
    description?: string;
    title?: string;
    author?: string;
    date?: string;
}


// import { UserData } from './user';
// import { Categories } from '../enums/categories.enum';

// export class PictureData {
//     $key: string;
//     name: string;
//     description: string;
//     author: UserData;
//     uploadDate: Date;
//     url: string;

//     constructor() {
//     }

//     static fromModel(model) {
//         const pictureData = new PictureData();
//         pictureData.name = model.name;
//         pictureData.description = model.description;
//         pictureData.author = model.author;
//         pictureData.uploadDate = model.uploadDate;
//         pictureData.url = model.srcUrl;
//         return pictureData;
//     }
// }