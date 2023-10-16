import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.scss']
})
export class LeftNavComponent implements OnInit  {
 
  isMobileView = true; 
  ngOnInit() {
    
    this.checkScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
   
    this.checkScreenSize();
  }

  checkScreenSize() {
   
    this.isMobileView = window.innerWidth < 768; 
  }
}
