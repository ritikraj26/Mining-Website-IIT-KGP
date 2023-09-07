import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-labs',
  templateUrl: './labs.component.html',
  styleUrls: ['./labs.component.css']
})
export class LabsComponent {
  constructor(private http:HttpClient) {}

  research_areas:any;

  ngOnInit() {
    this.research_areas = this.http.get("http://127.0.0.1:8000/home/research_area/").subscribe(
      data => this.research_areas = data
    )
  }
  // const faculty = this.research_areas.research_area.faculties
}
