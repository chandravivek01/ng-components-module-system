import { Component } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent {

  stats = [
    { value: 22, label: 'Number of users' },
    { value: 100, label: 'Revenue' },
    { value: 50, label: 'Reviews' }
  ];

  items = [
    { image: '/assets/images/couch.jpeg', title: 'Couch', description: 'Fantastic couch to sit on' },
    { image: '/assets/images/dresser.jpeg', title: 'Dresser', description: 'Great dresser to put stuff in' }
  ];
}
