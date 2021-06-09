import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Task} from '../models/Task';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private _url = "http://localhost:3000/tasks";

  constructor(private http : HttpClient) { }

  //** Get All Tasks */
  getTasks ():Observable <Task[]>{
    return this.http.get<Task[]>(this._url);
  }

  //** Add a Task */
  addTask(task: Task){
    return this.http.post<Task>(this._url, task);
  }
// ** Delete A Task */
onDelete(task: Task){
  const url =`${this._url}/${task.id}`;
  return this.http.delete<Task>(url);
}
}
