import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'My App';
  serverData: JSON;
  employeeData: JSON;
  greeting: string = '';
  employees: any[] = [];

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.sayHi();
    this.getAllEmployees();
  }

  sayHi() {
    this.httpClient.get('http://127.0.0.1:5002/').subscribe(data => {
      this.serverData = data as JSON;
      console.log(this.serverData);
      this.greeting = this.serverData['text'];
    })
  }

  getAllEmployees() {
    this.httpClient.get('http://127.0.0.1:5002/employees').subscribe(data => {
      this.employeeData = data as JSON;
      console.log(this.employeeData);
      this.employees = this.employeeData['employees'];
    })
  }
}