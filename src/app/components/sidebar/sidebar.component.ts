import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  impactOpen = true;
  impactClosed = false;
  astutExperienceOpen=false;
  astutExperienceClose=true;
  myStackOpen =false;
  myStackClose=true;
  
  
    ngOnInit(): void {
    }
  
    
  
  
  toggleExperience(){
this.astutExperienceClose =! this.astutExperienceClose,
this.astutExperienceOpen =! this.astutExperienceOpen
  }
  
  toggleTools(){
    this.myStackOpen =! this.myStackOpen,
    this.myStackClose =! this.myStackClose

  }

    
  toggleImpact(){

    this.impactClosed =! this.impactClosed,
    this.impactOpen =! this.impactOpen

  }
  }