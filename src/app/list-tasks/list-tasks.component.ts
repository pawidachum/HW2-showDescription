import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Tasks } from '../tasks';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css']
})
export class ListTasksComponent implements OnInit {
@Input()
taskObj: Tasks;
index!: number;
tasks: Tasks[]=[];

@Output()
OnDeleted: EventEmitter<ListTasksComponent> = new EventEmitter();
@Output() 
OnSelected: EventEmitter<ListTasksComponent> = new EventEmitter();
    isSelected: boolean;
    static isSelected: boolean;
    
  constructor() { 
  }

  ngOnInit(): void {
  }

delete() {
  this.OnDeleted.emit(this);
}
selected (){
  this.OnSelected.emit(this);
}
}
