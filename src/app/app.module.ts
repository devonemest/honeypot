import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';

import { AppComponent } from './app.component';
import { GeoComponent } from './geo/geo.component';
import {WebSpeechModule} from "./web-speech/web-speech.module";
import {SharedModule} from "./shared/shared.module";
import { FingerprintComponent } from './fingerprint/fingerprint.component';
import {AppRoutingModule} from "./app-routing.module";
import { environment } from '../environments/environment';
import { AsyncPipe } from '@angular/common';
import {MessagingService} from "./service/messaging.service";

@NgModule({
  declarations: [
    AppComponent,
    GeoComponent,
    FingerprintComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    WebSpeechModule,
    FormsModule,
    BrowserAnimationsModule,
    SharedModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireMessagingModule,
    AngularFireModule.initializeApp(environment.firebase)

  ],
  providers: [MessagingService,AsyncPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
