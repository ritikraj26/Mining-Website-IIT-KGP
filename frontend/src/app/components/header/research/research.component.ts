import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.css']
})
export class ResearchComponent {
  constructor(private http:HttpClient) {}

  research:any;

  ngOnInit() {
    this.research = this.http.get("http://127.0.0.1:8000/home/research_area/").subscribe(
      data => this.research = data
    )
  }
}
