import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable, throwError } from 'rxjs';
// import { catchError, retry } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
// import { FormGroup } from '@angular/forms';
// import { SignupComponent } from './signup/signup.component';

@Injectable({
  providedIn: 'root'
})
// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type':  'application/json',
//     'Authorization': 'my-auth-token'
//   })
// };
export class NewsApiService {
  api_key = '2222bb6f2728417e94a92dd2313ce4c6';
  language:String ='en';
  // postuser: 'registerForm';

  constructor(private http:HttpClient) { }
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
  
 
 signup(getuser: String):Promise <any>
 
 {
   return this.http.get("http://localhost:8080/empl/login/"+ getuser).toPromise().then(response => response).catch(error=>Promise.reject(error.json || error))
 }

//  signin(postuser: registerForm):Promise <any>
//  Headers=new Headers({
//   'Content-Type':'application/json'
// })
 
 
//    return this.http.post("http://localhost:8080/empl/login/user",JSON.stringify(reg),{headers:Headers}).toPromise().then(response => response).catch(error=>Promise.reject(error.json || error))
// }
 
}