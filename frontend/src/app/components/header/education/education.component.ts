import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {

  constructor(private http:HttpClient) {}

  education:any;

  ngOnInit() {
    this.education = this.http.get("http://127.0.0.1:8000/home/education/").subscribe(
      data => this.education = data
    )
  }
}
