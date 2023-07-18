import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {

  constructor(private http:HttpClient){}
  events:any;
  ngOnInit(){
    this.events = this.http.get("http://127.0.0.1:8000/home/event/").subscribe(
     data => this.events = data
    )
  }
}
