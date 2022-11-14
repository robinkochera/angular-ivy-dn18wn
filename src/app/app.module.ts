import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {NotificationManager} from '../Manager/Manager'
import {Button} from '../Button/Button'

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent ,NotificationManager,Button],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
