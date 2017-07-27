import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

//Import module in this place ...
import { AngularFireModule} from 'angularfire2';
import { UserService } from '../providers/user-service';
import { Service } from '../providers/service';

//Make pages in this place ...(Nadun)
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HomepagePage } from '../pages/homepage/homepage';
import { AddPage } from '../pages/add/add';
import { UpdatePage } from '../pages/update/update';
import { SearchPage } from '../pages/search/search';
import { DeletePage } from '../pages/delete/delete';





export const firebaseConfig = {

    apiKey: "AIzaSyAK2Az8mAQ-OyOcENRyf_gNr-7a8Y6-_as",
    authDomain: "year3-7b75c.firebaseapp.com",
    databaseURL: "https://year3-7b75c.firebaseio.com",
    projectId: "year3-7b75c",
    storageBucket: "year3-7b75c.appspot.com",
    messagingSenderId: "311015007106"

}



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HomepagePage,
    AddPage,
    UpdatePage,
    SearchPage,
    DeletePage


  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HomepagePage,
    AddPage,
    UpdatePage,
    SearchPage,
    DeletePage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
