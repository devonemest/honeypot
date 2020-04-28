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
import { MetrikaModule } from 'ng-yandex-metrika';
import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  {path: '', component: AppComponent}
];
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
    AngularFireModule.initializeApp(environment.firebase),
    MetrikaModule.forRoot(
      {id: 62381503, clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true}, // CounterConfig | CounterConfig[]
      // Можно задать ид счетчика, либо порядковый номер в массиве, необязательный параметрб по умолчанию первый попавшийся.
      62381503, // number | string
    ),
    RouterModule.forRoot(appRoutes)



  ],
  providers: [MessagingService, AsyncPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
