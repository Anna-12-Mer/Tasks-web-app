import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { HeaderComponent } from './components/header/header.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { FormsModule } from '@angular/forms';
import { UpdateTaskComponent } from './components/update-task/update-task.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    TasksComponent,
    HeaderComponent,
    TaskItemComponent,
    UpdateTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
