import { Component, Input } from "@angular/core";

@Component({
  template:'<h3>{{iBtnCount}}</h3>',
  selector:'ibutton'
})
export class Button{
@Input() iBtnCount=0;

}