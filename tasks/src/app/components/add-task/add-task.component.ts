import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from '../../services/ui.service';
import {TaskService} from '../../services/task.service'
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  showAddTask : boolean = false;
  subscription!: Subscription;

  name!: string;
  day!: string;
  reminder : boolean= false;
  errMsg : string ='';

  @Output() newTaskEvent = new EventEmitter();

  constructor(private uiService: UiService, private taskService : TaskService) {
    this.subscription = this.uiService.onToggle().subscribe((v)=> this.showAddTask = v);
  }

  ngOnInit(): void {
  }

onSubmit(){
  if(this.name =='')
   this.errMsg ='Enter your Task name'

  const body = {
    name: this.name,
    day: this.day,
    reminder: this.reminder
  }
  this.newTaskEvent.emit(body);
  
  this.name ='';
  this.day = '';
  this.reminder = false;
}
}
