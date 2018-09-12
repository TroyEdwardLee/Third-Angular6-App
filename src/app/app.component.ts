import { Component, OnInit } from '@angular/core';
import { TestService } from './test.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Third-Angular6-App';

  constructor(private svc: TestService, private http: HttpClient) {
    this.svc.printToConsole(this._getStringTxt());
  }

  ngOnInit() {
    const obs = this.http.get('https://api.github.com/users/koushikkothagal');
    obs.subscribe((oJSONData) => { console.log(oJSONData); });
  }

  private _getStringTxt(): any {
    return 'I got the service!';
  }
}
