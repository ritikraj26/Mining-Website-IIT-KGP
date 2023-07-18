import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})

export class PeopleComponent {
  constructor(private http:HttpClient,private sanitizer: DomSanitizer) {}

  faculty:any;
  staff:any;

  ngOnInit() {
    this.faculty = this.http.get("http://127.0.0.1:8000/home/faculty_members/").subscribe(
      data => this.faculty = data
    )
    this.staff = this.http.get("http://127.0.0.1:8000/home/staff_members/").subscribe(
      data => this.staff = data
    )
  }
}
