import { Injectable, OnInit } from '@angular/core';
import { HttpClient }  from '@angular/common/http'
import { environment }  from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class HttpService implements OnInit{

  constructor(private _http: HttpClient) { }
  
  ngOnInit(): void {
    
  }
  
  ejecutaApi(id:string){
    let URL = `${environment.rutaApi}&id=${id}`
    return this._http.get(URL);
  }
}
