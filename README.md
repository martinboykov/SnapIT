# **SnapIT**
SnapIT is a Single Page Application (SPA), with a front-end build with Angular, that can surve as a photographer's platform, for sharing pictures. Tha application is build with edjucational purposes by team of 3 as part of project assignment for the Course for Single-page Applications with Angular at Telerik Academy 2016-2017.
It offers functionalities such as: upload of images, personal profile page, edit of the existing images and statistics of the users and images, divided by categories.

#### Demo: <a href="https://snapit-768ca.firebaseapp.com" target="_blank">https://snapit-768ca.firebaseapp.com</a>


<!-- #### Video Preview - Desktop: <a href="https://www.youtube.com/watch?v=0zFTRU7UpSM" target="_blank">https://www.youtube.com/watch?v=0zFTRU7UpSM</a>

[![https://www.youtube.com/watch?v=q-o8NgFBtDA](https://media.giphy.com/media/l57qdZsFax6lbEHQJ3/giphy.gif)](https://www.youtube.com/watch?v=q-o8NgFBtDA)

#### Video Preview - Mobile: <a href="https://www.youtube.com/watch?v=l40k-GeFjl8" target="_blank">https://www.youtube.com/watch?v=l40k-GeFjl8</a>

[![https://www.youtube.com/watch?v=333t9ANeLNQ](https://media.giphy.com/media/QVmoPvkXIXMFzromvD/giphy.gif)](https://www.youtube.com/watch?v=333t9ANeLNQ) -->


## **Table of contents**
<!-- add here -->


<a href="#features"></a>
## **Features**

All the functionalities of the application are accessible on both mobile and desktop.
<a href="#menu"></a>

### _Menu_
The posts are organized in different categories and subcategories. A category may or may not have subcategories. On desktop version the subcategories are accessible via dropdown list under their main category. On mobile version there is a hamburger menu available in the top left corner.


















Web Applications with Angular | Team "TheUnevenKangaroos"

This document describes the course project assignment for the Single-page Applications with Angular at Telerik Academy.

Project Description

SnapIT is a Single Page Application (SPA) using  Angular, Firebase /as a data provider/.

The applications main idea is be a photographer's platform, for sharing pictures. The images are devided in several categories - Landscapes, Animals, Architecture, Portraits and etc.

The application can be used from both non-registered users /public part/ and registered users /private part/ , but with different access rights. The public part - such as home page, different category content, detailed image information, login and register forms, about page and etc. is accessible for both user types.

The private parts /image upload, image edit, personal profile page/ are available only for signed in users.

Firebase is used as a database provider
Firebase is used for user's authentication

Client side

The front edn is mainly using standard CSS3 and Bootstrap. The response is accomplished through Bootstrap and CSS3 as well. Client side validation prevents input of invalid data states from the public to the server part. Invalid input is followed with an appropriate message. The user interface is aimed to be user friendly and provides an easy functionality for its clients.

Testing

The stable state of the application is provided through

unit tests
Deployment in Amazon Web Services (AWS)

The application is deployed at https://snapit-768ca.firebaseapp.com/home

As a source control system is used Github
