import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  templateUrl:'./Manager.html',
  selector:'NotificationManager'
})
export class NotificationManager implements OnInit{

@Input() Count =0;
@Output() CountChanged = new EventEmitter<number>();
addNotofication(){
  this.Count++;
  this.CountChanged.emit(this.Count);

}

ngOnInit():void{

}

}