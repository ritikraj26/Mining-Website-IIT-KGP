import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-socities',
  templateUrl: './socities.component.html',
  styleUrls: ['./socities.component.css']
})
export class SocitiesComponent {
  constructor(private http:HttpClient) {}

  society:any;

  ngOnInit() {
    this.society = this.http.get("http://127.0.0.1:8000/home/society/").subscribe(
      data => this.society = data
    )
  }

}
