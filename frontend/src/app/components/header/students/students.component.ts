import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
  constructor(private http:HttpClient,private sanitizer: DomSanitizer) {}

  student:any;

  ngOnInit() {
    this.student = this.http.get("http://127.0.0.1:8000/home/research_scholars/").subscribe(
      data => this.student = data
    )
  }
}
