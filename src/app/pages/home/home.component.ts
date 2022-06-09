import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


iqExperience = true;
iqExperienceClosed = false;
toolsOpen=false;
toolsClose=true;


  ngOnInit(): void {
  }

  


toggleExperience(){
  this.iqExperience =!this.iqExperience,
  this.iqExperienceClosed =!this.iqExperienceClosed
}

toggleTools(){
  this.toolsOpen=!this.toolsOpen;
  this.toolsClose=!this.toolsClose;
}
}
