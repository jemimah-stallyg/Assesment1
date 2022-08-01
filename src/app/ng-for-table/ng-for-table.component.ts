import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-table',
  templateUrl: './ng-for-table.component.html',
  styleUrls: ['./ng-for-table.component.css']
})
export class NgForTableComponent implements OnInit {
 array =[
  {
    sno: 1,
    name:'Jemimah.S',
    department:'CSE',
    Section:'A',
    Hobby:'Drawing',
    interestedSub:'Maths'
  },
  {
    sno: 2,
    name:'Athira.J',
    department:'CSE',
    Section:'A',
    Hobby:'Parapsychology',
    interestedSub:'Science'
  },
  {
    sno: 3,
    name:'Archana',
    department:'ECE',
    Section:'B',
    Hobby:'Studying',
    interestedSub:'HTML'
  },
  


 ]

  constructor() { }

  ngOnInit(): void {
  }

}
