import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent {
  constructor(private http:HttpClient) {}

  obj:any;

  ngOnInit() {
    this.obj = this.http.get("http://127.0.0.1:8000/home/staff_members/").subscribe(
      data => this.obj = data
    )
  }
}
