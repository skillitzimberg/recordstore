# RecordStore
An online record shop. Tutorial project from [Epicodus](https://www.learnhowtoprogram.com).

### Author
Scott Bergler & Michael Brown

## Table of contents
**[Resources](#resources)**<br>
**[Setup & Installation](#setup-and-installation)**<br>
**[Known Bugs](#known-bugs)**<br>
**[Support](#support-and-contact-details)**<br>
**[Technologies Used](#technologies-used)**<br>
**[License](#license)**<br>
**[Copyright](#copyright)**<br>

## Resources
See [SETUP.md](./SETUP.md) for details about tools you may need to install and use to work on and use this project on your Mac.  

Here are some links in case you need information about setup for other operating systems:  
[Angular](https://angular.io/);
[Angularfire](https://github.com/angular/angularfire2);
[Firebase](https://firebase.google.com/);
[Karma](https://karma-runner.github.io/latest/index.html);
[Jasmine](https://jasmine.github.io/);
[Node JS](https://nodejs.org/en/);
[TypeScript](https://www.typescriptlang.org/).

## Setup and Installation
Fork the repository from [GitHub](https://github.com/skillitzimberg/recordstore).  
Clone your forked repository.  

Use your preferred command line/terminal to navigate into the directory:
```
cd recordstore/
```
#### Setup for Firebase database usage
Go to [Firebase](https://firebase.google.com/).
Set up an account for yourself. If you already have a Google or Gmail account, you already have access - just sign in.  
Once you've created an account, you should be taken to a user dashboard area, with an option to Create a New Project. Select this option, provide a name for your new project, and select your Country/region from the drop-down menu.  

You'll then be taken to an "Overview" area. Where you'll be offered three options:  

- Add Firebase to your iOS app
- Add Firebase to your Android app
- Add Firebase to your web app

Select Add Firebase to your web app. Firebase should respond with a pop-up modal window. Keep the information in this modal handy.  

Create a new file called api-keys.ts in the src/app directory. This file has been added to the .gitingore, so your credentials will not be pushed to Github.  

Copy your Firebase credentials into api-keys.ts:
```
export const masterFirebaseConfig = {
    apiKey: "xxxx",
    authDomain: "xxxx.firebaseapp.com",
    databaseURL: "https://xxxx.firebaseio.com",
    storageBucket: "xxxx.appspot.com",
    messagingSenderId: "xxxx"
  };
```

(The x's represent your specific information just for this example. Replace them with your actual credentials.)

#### Run the application
In the project root directory run the command:
```
npm install
```
Run the command:
```
ng serve --open
```
Your default browser should open a new window or tab with the website/app ready to use.

## Known Bugs

## Support
Scott Bergler :: commandinghands@gmail.com

## Technologies Used
For versions and a full list of dependencies, plugins, and scripts see the "devDependencies" section in [package.json](./package.json).  

| Dependency | Description |
| --- | --- |
| angularfire2 | library for connecting Firebase with Angular |
| babel-core | Babel compiler core |
| babel-loaded | Babel loader for webpack |
| babel-present-es2015 | Specifies how Babel can convert ES6 to ES5 |
| clean-webpack-plugin | Clean your build folder(s) before building |
| css-loader | Interprets `@import` and `url()` like `import/require()` and resolves them |
| dotenv-webpack | imports information like API keys from .env to src/anyfile.js |
| eslint | Identifies and reports on patterns found in Javscript code |
| eslint-loader | ESLint loader for webpack |
| firebase | library for working with Firebase |
| html-webpack-plugin | Simplifies creation of HTML files to serve webpack bundles |
| jasmine | Allows Jasmine specs to be run |
| jasmine-core | JavaScript BDD testing framework |
| karma | Allows the execution of JavaScript code in multiple *real* browsers |
| karma-chrome-launcher | Launcher for Google Chrome, Google Chrome Canary, and Google Chromium |
| karma-cli | Use Karma from the command line |
| karma-jasmine | Plugin - adapter for Jasmine testing framework |
| karma-jasmine-html-reporter | Dynamically shows test results at debug.html page |
| karma-jquery | Plugin - adapter for jQuery framework |
| karma-webpack | Use webpack to preprocess files in Karma |
| style-loader | adds CSS to the DOM by injecting a `<style>` tag |
| uglifyjs-webpack-plugin | Minifies JavaScript |
| webpack | A module bundler used to bundle JavaScript files and additional resources   *Note - Remove carrot sign ^ in version number if webpack issues occur* |
| webpack-cli | Use webpack from command line |
| webpack-dev-server | Provides live reloading during development |
| css-loader and style-loader | renders images in DOM when `<img>` tag is used |

## License
Licensed under the MIT license.

## Copyright
Copyright (c) 2019 ** Scott Bergler & Michael Brown **
