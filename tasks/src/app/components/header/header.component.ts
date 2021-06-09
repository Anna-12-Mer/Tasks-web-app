import { Component, OnInit } from '@angular/core';
import { Subscription  } from 'rxjs';
import {UiService} from '../../services/ui.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showAddTask : boolean = false;
  subscription!: Subscription;
  color : string = 'green';
  text : string = 'Add';
  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe((v)=> this.showAddTask = v);
  }

  ngOnInit(): void {
  }

  toggeleAddTask(){
    this.showAddTask? this.color= 'green' : this.color= 'red';
    this.showAddTask? this.text= 'Add' : this.text= 'Close'
    this.uiService.toggleAddTask();
  }



}
