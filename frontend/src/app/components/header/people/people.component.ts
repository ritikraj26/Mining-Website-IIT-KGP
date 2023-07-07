import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})

export class PeopleComponent {
  constructor(private http:HttpClient) {}

  obj:any;
  faculty:any;

  ngOnInit() {
    this.obj = this.http.get("http://127.0.0.1:8000/home/faculty_members/").subscribe(
      data => this.obj = data
    )
  }
}
