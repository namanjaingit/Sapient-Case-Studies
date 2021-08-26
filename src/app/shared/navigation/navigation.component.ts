import { Component, Input, OnInit } from '@angular/core';
import { Link } from 'src/app/models/link.interface';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  @Input() linkArr: Link[];

  constructor() {}

  ngOnInit(): void {}
}
