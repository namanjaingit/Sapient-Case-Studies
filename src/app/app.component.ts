import { Component } from '@angular/core';
import { Link } from './models/link.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  pageLink: Link[] = [
    {
      name: 'Route One',
      linkTo: 'route-one',
    },
    {
      name: 'Route Two',
      linkTo: 'route-two',
    },
    {
      name: 'Route Three',
      linkTo: 'route-three',
    },
    {
      name: 'Route Four',
      linkTo: 'route-four',
    },
    {
      name: 'Route Five',
      linkTo: 'route-five',
    },
    {
      name: 'Route Six',
      linkTo: 'route-six',
    },
  ];
}
