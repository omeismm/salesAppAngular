import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
//to start, type "ng serve" in the terminal

//if environment is production, enable production mode
//import { enableProdMode } from '@angular/core';
//import { environment } from './environments/environment'; //i need to write this file manually, see 2:46:55 in the video  
//if (environment.production) {
 // enableProdMode();
//}


bootstrapApplication(AppComponent, appConfig)//i need to create app module 2:57:00
  .catch((err) => console.error(err));
