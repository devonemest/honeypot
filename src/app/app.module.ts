import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GeoComponent } from './geo/geo.component';
import {WebSpeechModule} from "./web-speech/web-speech.module";
import {FormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SharedModule} from "./shared/shared.module";
import { FingerprintComponent } from './fingerprint/fingerprint.component';

@NgModule({
  declarations: [
    AppComponent,
    GeoComponent,
    FingerprintComponent
  ],
  imports: [
    BrowserModule,
    WebSpeechModule,
    FormsModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
