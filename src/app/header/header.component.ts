
import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../news-api.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
logged = sessionStorage.getItem('isloggedin');
loggedout=sessionStorage.getItem('isloggedout');
  constructor(
    private newsservice: NewsApiService, private router: Router
  ) { }

  ngOnInit() {
  }

  logout(){
    sessionStorage.setItem('isloggedout','no')
    this.router.navigate(['login'])
    }
}

