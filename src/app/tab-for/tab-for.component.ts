import { Component, OnInit } from '@angular/core';
import { Itab } from '../models/tabs';

@Component({
  selector: 'app-tab-for',
  templateUrl: './tab-for.component.html',
  styleUrls: ['./tab-for.component.scss']
})
export class TabForComponent implements OnInit {
tabsArr : Array<Itab> = [ 
  {
    tabTitle : 'Angular 14',
    frameWorkName : 'angular 14',
    tabContent : ` <strong>Angular</strong> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis fuga eius iste reprehenderit totam consequatur fugiat ad aliquid quidem  `
  },
  {
    tabTitle : 'Node',
    frameWorkName : 'node',
    tabContent : ` <strong>Node</strong> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis fuga eius iste reprehenderit totam consequatur fugiat ad aliquid quidem  `
  },
  {
    tabTitle : 'Express',
    frameWorkName : 'express',
    tabContent : ` <strong>Express</strong> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis fuga eius iste reprehenderit totam consequatur fugiat ad aliquid quidem  `
  },
  {
    tabTitle : 'MangoDB',
    frameWorkName : 'mangodb',
    tabContent : ` <strong>MangoDB</strong> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis fuga eius iste reprehenderit totam consequatur fugiat ad aliquid quidem  `
  }
  
]

selectedSkill : string ='angular 14'
  constructor() { }

  ngOnInit(): void {}
  
  onTabChange(skill : string){
    this.selectedSkill = skill
  }

}
