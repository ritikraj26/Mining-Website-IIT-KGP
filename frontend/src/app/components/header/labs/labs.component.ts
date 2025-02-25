import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-labs',
  templateUrl: './labs.component.html',
  styleUrls: ['./labs.component.css'],
})
export class LabsComponent implements OnInit {
  research_areas: any[] = []; // To hold the list of research areas
  expandedStates: boolean[] = []; // To track expanded state of each research area

  constructor(private http: HttpClient) {}

  // Toggle the expansion of the specific research area
  toggleExpand(index: number) {
    this.expandedStates[index] = !this.expandedStates[index];
  }

  // On component initialization, fetch the research areas from the API
  ngOnInit() {
    this.http.get<any[]>('http://127.0.0.1:8000/home/research_area/').subscribe(
      (data) => {
        this.research_areas = data;
        // Initialize the expandedStates array with false (all collapsed initially)
        this.expandedStates = new Array(this.research_areas.length).fill(false);
      },
      (error) => {
        console.error('Error fetching research areas:', error);
      }
    );
  }
}
