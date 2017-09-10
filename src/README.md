SnapIT

Web Applications with Angular | Team "TheUnevenKangaroos"

This document describes the course project assignment for the Single-page Applications with Angular at Telerik Academy.

Project Description

The current project is a single page application using Angular, Firebase /as a data provider/.

The applications main idea is be a photographer's platform, for sharing pictures. The images are devided in several categories - Landscapes, Animals, Architecture, Portraits and etc.

The application can be used from both non-registered users /public part/ and registered users /private part/ , but with different access rights. The public part - such as home page, different category content, detailed image information, login and register forms, about page and etc. is accessible for both user types.

The private parts /image upload, image edit, personal profile page/ are available only for signed in users.


The server is build through Express
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