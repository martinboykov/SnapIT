# **SnapIT**
SnapIT is a Single Page Application (SPA), with a front-end build with Angular, that can surve as a photographer's platform, for sharing pictures. Tha application is build with edjucational purposes by team of 3 as part of project assignment for the Course for Single-page Applications with Angular at Telerik Academy 2016-2017.
It offers functionalities such as: upload of images, personal profile page, edit of the existing images and statistics of the users and images, divided by categories.

#### Demo: <a href="https://snapit-768ca.firebaseapp.com" target="_blank">https://snapit-768ca.firebaseapp.com</a>


<!-- #### Video Preview - Desktop: <a href="https://www.youtube.com/watch?v=0zFTRU7UpSM" target="_blank">https://www.youtube.com/watch?v=0zFTRU7UpSM</a>

[![https://www.youtube.com/watch?v=q-o8NgFBtDA](https://media.giphy.com/media/l57qdZsFax6lbEHQJ3/giphy.gif)](https://www.youtube.com/watch?v=q-o8NgFBtDA)

#### Video Preview - Mobile: <a href="https://www.youtube.com/watch?v=l40k-GeFjl8" target="_blank">https://www.youtube.com/watch?v=l40k-GeFjl8</a>

[![https://www.youtube.com/watch?v=333t9ANeLNQ](https://media.giphy.com/media/QVmoPvkXIXMFzromvD/giphy.gif)](https://www.youtube.com/watch?v=333t9ANeLNQ) -->


## **Table of contents**
 - [**Features**](#features)
   - [_Menu_](#menu)
   - [_Infinity-scroll_](#infinity-scroll)
   - [_Image Details Page_](#image-details-page)
   - [_Image Edit Page_](#image-edit-page)
   - [_Image Upload Page_](#image-upload-page)
   - [_Profile Page_](#profile-page)
   - [_Authentication/Authorization_](#authenticationauthorization)
 - [**Architecture and technologies**](#architecture-and-technologies)
   - [_Angular_](#angular)
   - [_Firebase_](#firebase)
     - [_Firebase Realtime Database_](#firebase-realtime-database)
     - [_Firebase Storage_](#firebase-storage)
     - [_Firebase Auth_](#firebase-auth)
     - [_Firebase Hosting_](#firebase-hosting)
 - [**Testing**](#testing)
 - [**Build Process**](#build-process)
   - [API-keys](#api-keys)
 - [**Team**](#team)


<a href="#features"></a>

## **Features**

All the functionalities of the application are accessible on both mobile and desktop.

<a href="#menu"></a>

### _Menu_
There are 3 pages available to access for unauthenticated users: Home, Filter, Login/Register. For authenticated users there is also Upload page available and Personal Profile page.
On mobile version there is a hamburger menu available in the top right corner from which you can access the navigation.


<a href="#infinity-scroll"></a>

### _Infinity-scroll_
The list of images in Filter page is controlled by Infinity scroll (12 images per load).

<!-- <img src="https://media.giphy.com/media/RlIK7Ay8UjnIzQY2w6/giphy.gif" alt="Infinity scroll" title="Infiniti scroll"/> -->

<a href="#image-details-page"></a>

### _Image-Details-Page_
For every image there is detail page available, where can be found its full content and ability to update and delete it for authencticated and authorized users.

<!-- <img src="https://media.giphy.com/media/J5GneIukbmsiPha59P/giphy.gif" alt="image-Details-Page preview" title="image-Details-Page"/> -->

<a href="#image-edit-page"></a>

### _Image-Edit-Page_
Users with required authentication and authorization privaleges can perform update and delete operations on the selected image.

<!-- <img src="https://media.giphy.com/media/llstrWBxbHprxlJg4O/giphy.gif" alt="image-Edit-Page preview" title="image-Edit-Page"/> -->

<a href="#image-upload-page"></a>

### _Image-Upload-Page_
Authenticated users can upload new images.

<!-- <img src="https://media.giphy.com/media/llstrWBxbHprxlJg4O/giphy.gif" alt="image-Edit-Page preview" title="image-Edit-Page"/> -->

<a href="#profile-page"></a>

### _Profile-Page_
Page where you can see your uploaded images.

<!-- <img src="https://media.giphy.com/media/llstrWBxbHprxlJg4O/giphy.gif" alt="image-Edit-Page preview" title="image-Edit-Page"/> -->

<a href="#authenticationauthorization"></a>

### _Authentication/Authorization_
Users can authenticate themselves in signup/login pages. Users that are not authenticated can't upload images.

<!-- <img src="https://media.giphy.com/media/QxkhnfoxLFZNc0Ow6K/giphy.gif" alt="Authentication preview" title="Authentication"/> -->

After successful authentication the user will be able to upload new images and edit the one that he already had uploaded.

<a href="#architecture-and-technologies"></a>

## **Architecture and Technologies**
<!-- <img src="./assets/images/architecture/Architecture_v1.png?raw=true" alt="Application Architecture" title="Application Architecture" width=880/> -->

The Front-End is build with Angular. For the backhend is used Firebase with the following services: Realtime Database, Auth, Storage. The application is deployed on Firebase Hosting.

<a href="#angular"></a>

### _**Angular**_
The Application is following the Style Guide and the Folders-by-feature structure. Several user defined modules were created: CoreModule, SharedModule, AppRoutingModule

<a href="#firebase"></a>

### _**Firebase**_

<a href="#firebase-realtime-database"></a>

#### Firebase Realtime Database
Firebase provides a realtime database and backend as a service. The service provides application developers an API that allows application data to be synchronized across clients and stored on Firebase's cloud.

<a href="#firebase-storage"></a>

#### Firebase Storage
Firebase Storage provides secure file uploads and downloads for Firebase apps. The developer can use it to store images, audio, video, or other user-generated content. Firebase Storage is backed by Google Cloud Storage.

<a href="#firebase-auth"></a>

#### Firebase Auth
Firebase Auth is a service that can authenticate users using only client-side code. It includes a user management system whereby developers can enable user authentication with email and password login stored with Firebase.

<a href="#firebase-hosting"></a>

#### Firebase Hosting
Firebase Hosting is a static and dynamic web hosting. It supports hosting static files such as CSS, HTML, JavaScript and other files. The service delivers files over a content delivery network (CDN) through HTTP Secure (HTTPS) and Secure Sockets Layer encryption (SSL). Firebase partners with Fastly, a CDN, to provide the CDN backing Firebase Hosting.

<a href="#testing"></a>

## **Testing**
The stable state of the application is provided through unit tests.


<a href="#build-processt"></a>

## **Build-Process**

1. Install the required dependencies with `npm install`
2. Connect to Firebase. You can find detailed information here: <a href="angularfire2" target="_blank">https://github.com/angular/angularfire2/blob/master/docs/install-and-setup.md</a><br/>
In the current app the connection is made in the CoreModule.
3. Run the application:
* Development: start angular dev-server with `ng serve`
* Production: compile the Angular app with output directory - dist with `ng build --prod`


## _**Team**_
Name: Martin Martinov <br/>
Email: m.boykov.martinov@gmail.com <br/>
Github: https://github.com/martinboykov

Name: Stefan Ludzhev <br/>
Github: https://github.com/ludzhev

Name: Mihaela Ivanova <br/>
Github: https://github.com/mihaelaivanovaivanova
