import { Component,OnInit, HostListener  } from '@angular/core';

@Component({
  selector: 'app-mobile-nav',
  templateUrl: './mobile-nav.component.html',
  styleUrls: ['./mobile-nav.component.scss']
})
export class MobileNavComponent implements OnInit {
  showFiller = false;
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

