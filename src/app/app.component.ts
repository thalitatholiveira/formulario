import { Component } from '@angular/core';
import * as dayjs from 'dayjs'
import { NgxMaskModule, IConfig } from 'ngx-mask'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  popup = false;

  public submit() {
    this.popup = true;
  }

  public closePopup() {
    this.popup = false;
  }
}