import {Component, Input, OnInit} from '@angular/core';
import * as Fingerprint2 from 'fingerprintjs2'
@Component({
  selector: 'app-fingerprint',
  templateUrl: './fingerprint.component.html',
  styleUrls: ['./fingerprint.component.css']
})
export class FingerprintComponent implements OnInit {

  constructor() {

  }
  hash = {};
  ngOnInit(): void {
    setTimeout(() => {
      Fingerprint2.get((result, components) => {
        this.hash = result;
        console.log(result);
        // console.log(components); // an array of components: {key: ..., value: ...}
        let info = {
          fingerprint: result
        };

        this.processFingerprint(info);

      })
    }, 500)
  }
  processFingerprint(data) {
    alert(data.fingerprint);
  }


}
