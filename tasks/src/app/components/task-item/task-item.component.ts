import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import {Task} from '../../models/Task'
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
   @Input()
  task!: Task;
  @Output() deleteEmit  = new EventEmitter();
  showModal: boolean = false;
  newTask! : Task;

  constructor() {
  }

  ngOnInit(): void {
  }
onDelete(task: Task){
  this.deleteEmit.emit(task);
}
showModel(task : Task){
  this.showModal = true;
}
hiden(){
  this.showModal = false;
}
}
