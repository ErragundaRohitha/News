import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable, throwError } from 'rxjs';
// import { catchError, retry } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
// import { FormGroup } from '@angular/forms';
// import { SignupComponent } from './signup/signup.component';
import { register } from './models/register.model';



const httpOptions={
  headers: new HttpHeaders({'Access-Control-Allow-Origin ': 'http://localhost:4200','Content-Type': 'application/json' }),
 
};

@Injectable({
  providedIn: 'root'
})

export class NewsApiService {
  api_key = '2222bb6f2728417e94a92dd2313ce4c6';
  language:String ='en';
  // postuser: 'registerForm';

  constructor(private http:HttpClient) { }
  private userUrl = 'http://localhost:8080/empl/user/createuser'

  initSources(){
    return this.http.get('https://newsapi.org/v2/sources?language='+this.language+'&apiKey='+this.api_key);
 }
 initArticles(){
  return this.http.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey='+this.api_key);
 }

 getArticlesByID(source: String){
  return this.http.get('https://newsapi.org/v2/top-headlines?sources='+source+'&apiKey='+this.api_key);
 }

 getArticleByLanguage(language: String){
  console.log(language);
  this.language = language;
 }
  getArticlesByKeyword(keyword:String)
  {
    return this.http.get('https://newsapi.org/v2/everything?q='+keyword+'&language=fr&apiKey='+this.api_key);
  }
  
 

  public createUser(user: register) :any {
    console.log(this.userUrl)
    return this.http.post<register>(this.userUrl,user);
   
  }
 
}