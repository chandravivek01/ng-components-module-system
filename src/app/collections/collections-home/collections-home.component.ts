import { Component } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent {

  data = [
    { name: 'Ram', age: 24, job: 'Designer' },
    { name: 'Shyam', age: 20, job: 'Devops' },
    { name: 'Sita', age: 24, job: 'Developer' }
  ];
  headers = [
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' },
  ];
}
