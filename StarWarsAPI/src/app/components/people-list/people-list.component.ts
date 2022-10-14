import { Component, OnInit } from '@angular/core';
import { PeopleService } from 'src/app/service/people.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

}
