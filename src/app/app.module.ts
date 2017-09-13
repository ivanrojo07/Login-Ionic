import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http'; 
import { routing, appRoutingProviders } from './app.routing';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegistroPage } from '../pages/registro/registro';
// import { RegistroPage } from "../pages/registro/registro";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegistroPage
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    HttpModule, 
    JsonpModule,
    routing,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegistroPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    appRoutingProviders,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
