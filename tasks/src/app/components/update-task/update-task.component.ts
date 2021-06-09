import { Component, Input, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import {Task} from '../../models/Task'

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit {

  @Input() task_update! : Task ;
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {

  }

savename(newValue : string){
  this.task_update.name = newValue;
}
saveday(newValue : string){
  this.task_update.day = newValue;
}
saveRemider(newValue : boolean){
  this.task_update.reminder = newValue;
}
onUpdate(){
  this.taskService.updateTask(this.task_update).subscribe();
}

}
