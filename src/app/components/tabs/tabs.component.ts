import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

diversityOpen = true;
diversityClose =false;

designToolsOpen =false;
designToolsClose = true;

devToolsOpen=false;
devToolsClose= true;

esSetOpen = false;
esSetClose =true;


myStackOpen =false;
myStackClose=true;



  ngOnInit(): void {
  }

  toggleDiversityOpen(){
    this.diversityClose = false
    this.diversityOpen = true
    this.designToolsOpen = false
    this.designToolsClose= true


      }

      toggleDiversityClose(){
        this.diversityClose = true
        this.diversityOpen =false
        this.designToolsOpen = false
        this.designToolsClose= true
        this.esSetClose = true
        this.esSetOpen = false
      }

      toggleDesignOpen(){
        this.diversityOpen =false
        this.diversityClose = true
        this.designToolsOpen = true
        this.designToolsClose =false
        this.esSetClose = true
        this.esSetOpen = false
    
          }


      toggleDesignClose(){
        this.diversityOpen =false
        this.diversityClose = true
        this.designToolsOpen = false
        this.designToolsClose =true;
        this.esSetClose = true
        this.esSetOpen = false
    
          }

          toggleDevOpen(){
            this.devToolsClose=false
            this.devToolsOpen=true
            
            this.diversityOpen =false
            this.diversityClose = true

            this.designToolsOpen = false
            this.designToolsClose =true;
            this.esSetClose = true
            this.esSetOpen = false

          }

          toggleDevClose(){

            this.devToolsClose=true
            this.devToolsOpen=false
            this.diversityOpen =false
            this.diversityClose = true

            this.designToolsOpen = false
            this.designToolsClose =true;
            this.esSetClose = true
            this.esSetOpen = false

          }


          toggleESOpen(){

            this.esSetClose = false
            this.esSetOpen = true

            this.devToolsClose=true
            this.devToolsOpen=false
            this.diversityOpen =false
            this.diversityClose = true

            this.designToolsOpen = false
            this.designToolsClose =true;

          }

          toggleESClose(){
            this.esSetClose = true
            this.esSetOpen = false

            this.devToolsClose=true
            this.devToolsOpen=false
            this.diversityOpen =false
            this.diversityClose = true

            this.designToolsOpen = false
            this.designToolsClose =true;

          }

          toggleTools(){
            this.myStackOpen =! this.myStackOpen,
            this.myStackClose =! this.myStackClose
        
          }
    



}
