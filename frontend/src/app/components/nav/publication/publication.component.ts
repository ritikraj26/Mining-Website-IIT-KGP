import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.css']
})
export class PublicationComponent {
  constructor(private http:HttpClient) {}

  obj:any;

  ngOnInit() {
    this.obj = this.http.get("http://127.0.0.1:8000/home/publications/").subscribe(
      data => this.obj = data
    )
  }
}
