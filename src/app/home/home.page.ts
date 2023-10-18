import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  users: any;

  constructor(private httpClient:HttpClient) {
    this.users = this.httpClient.get('https://raw.githubusercontent.com/jgarvel076/registrocoches/master/MOCK_DATA%20(1).json');
  }

}
