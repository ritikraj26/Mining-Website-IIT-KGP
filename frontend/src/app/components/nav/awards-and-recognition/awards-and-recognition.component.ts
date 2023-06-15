import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-awards-and-recognition',
  templateUrl: './awards-and-recognition.component.html',
  styleUrls: ['./awards-and-recognition.component.css']
})

export class AwardsAndRecognitionComponent {
  constructor(private http:HttpClient) {}

  obj:any;

  ngOnInit() {
    this.obj = this.http.get("http://127.0.0.1:8000/home/awards_and_recognitions/").subscribe(
      data => this.obj = data
    )
  }
}
