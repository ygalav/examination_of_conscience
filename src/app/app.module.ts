import {ErrorHandler, NgModule} from "@angular/core";
import {HttpModule} from "@angular/http";

import {IonicApp, IonicErrorHandler, IonicModule} from "ionic-angular";

import {MyApp} from "./app.component";
import {ListOfExaminationsPage} from "../pages/list-of-examinations-page/list-of-examinations.component";
import {ExaminationCardView} from "../pages/examination-card-view-page/examination-card-view.component";
import {Page2} from "../pages/page2/page2"; //TODO: Delete this page
import {StatusBar} from "@ionic-native/status-bar";
import {SplashScreen} from "@ionic-native/splash-screen";
import {ExaminationService} from "./examination/examination.service";
import {ExaminationUrlResolverService} from "./examination/examination-url-resolver.service";
import {CommandmentView} from "./views/commandment/commandment-view.component";
import {ConfessionService} from "./service/confession.service";
import {CreateConfessionModal} from "./modal/create-confession-modal/create-confession.modal";

@NgModule({
  declarations: [
    MyApp,
    ListOfExaminationsPage,
    ExaminationCardView,
    CommandmentView,

    CreateConfessionModal,

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
    CommandmentView,
    //Modals
    CreateConfessionModal,

    Page2 //TODO: Delete this page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ExaminationService,
    ExaminationUrlResolverService,
    ConfessionService
  ]
})
export class AppModule {}
