import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view-component',
  templateUrl: './view-component.component.html',
  styleUrls: ['./view-component.component.css']
})
export class ViewComponentComponent implements OnInit {

  userName: String;
  response: Object;
  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  handleSearch() {
    this.http.get('https://api.github.com/users/' + this.userName).subscribe((oResponse) => {
      this.response = oResponse;
      console.log(this.response);
    });
  }
}
