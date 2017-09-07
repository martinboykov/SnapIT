export interface Image {
    $key?: string;
    name?: string;
    url?: string;
}


// import { UserData } from './user';
// import { Categories } from '../enums/categories.enum';

// export class PictureData {
//     name: string;
//     description: string;
//     author: UserData;
//     uploadDate: Date;
//     srcUrl: string;

//     constructor() {
//     }

//     static fromModel(model) {
//         const pictureData = new PictureData();
//         pictureData.name = model.name;
//         pictureData.description = model.description;
//         pictureData.author = model.author;
//         pictureData.uploadDate = model.uploadDate;
//         pictureData.srcUrl = model.srcUrl;
//         return pictureData;
//     }
// }
