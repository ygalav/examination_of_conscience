import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule }    from '@angular/http';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';
import { ListOfExaminationsPage } from '../pages/list-of-examinations-page/list-of-examinations.component';
import { ExaminationCardView } from '../pages/examination-card-view-page/examination-card-view.component';
import { Page2 } from '../pages/page2/page2'; //TODO: Delete this page

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ExaminationService } from "./examination/examination.service";
import { ExaminationUrlResolverService } from "./examination/examination-url-resolver.service";

@NgModule({
  declarations: [
    MyApp,
    ListOfExaminationsPage,
    ExaminationCardView,
    Page2 //TODO: Delete this page
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListOfExaminationsPage,
    ExaminationCardView,
    Page2 //TODO: Delete this page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ExaminationService,
    ExaminationUrlResolverService
  ]
})
export class AppModule {}
