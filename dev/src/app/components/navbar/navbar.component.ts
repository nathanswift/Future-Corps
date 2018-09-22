import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() {
    window.addEventListener('click', function() {
      const homeButton = document.getElementsByClassName('navbar-toggle collapsed');
      if (homeButton) {
        location.reload();
      }
    });  
  }

  ngOnInit() {
  }

}
