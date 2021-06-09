import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private ShowAddSection : boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  toggleAddTask(): void{
    this.ShowAddSection = ! this.ShowAddSection;
    this.subject.next(this.ShowAddSection);
  }

  onToggle(): Observable<any>{
    return this.subject.asObservable();
  }
}
