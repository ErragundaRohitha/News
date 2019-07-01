import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../news-api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Articles:Array<any>;
  Sources:Array<any>;
  language: string = null;
  keyword: string = null; 

  constructor(private newsapi:NewsApiService, private router:Router) {
    console.log('home component constructor called'); 
   }

  ngOnInit() {
    
    this.newsapi.initArticles().subscribe(data => this.Articles = data['articles']);
 
    this.newsapi.initSources().subscribe(data=> this.Sources = data['sources']); 
  }
  searchArticles(source){
    console.log("selected source is: "+source);
    this.newsapi.getArticlesByID(source).subscribe(data => this.Articles = data['articles']);
  }

  searchArticleByKeyword(){
    console.log("selected keyword is: "+this.keyword);
      this.newsapi.getArticlesByKeyword(this.keyword).subscribe(data => this.Articles = data['articles']);
  }
  searchArticleByLanguage(){
    console.log("selected keyword is: "+this.language);
    
      this.newsapi.getArticleByLanguage(this.language);  
      this.ngOnInit();
  }
  
favourite(){
 
  this.router.navigate(['favourites'])
}
signout(){
  this.router.navigate(['signout'])
}

  }


