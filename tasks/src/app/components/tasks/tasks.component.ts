import { Component, OnInit } from '@angular/core';
import {Task} from '../../models/Task';
import {TaskService} from '../../services/task.service'


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks : Task [] = [];
  page : number = 1; 
  constructor(private taskService : TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks)=> this.tasks = tasks);
  }
  addTask(t: Task){
    this.taskService.addTask(t).subscribe((t)=> this.tasks.push(t));
  }
  deleteATask(task : Task){
    this.taskService.onDelete(task).subscribe(()=> this.tasks= this.tasks.filter((t)=>t.id != task.id)
    );
  }
}
