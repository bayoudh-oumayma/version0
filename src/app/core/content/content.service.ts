import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContentM } from './content-m';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
baseurl='http://localhost:3000/content'
  constructor(private httpclient: HttpClient) { }

  createQrCode(data:ContentM):Observable<ContentM>{
return this.httpclient.post<ContentM>(this.baseurl+'/',data)
  }
getQrCode():Observable<any>{
return this.httpclient.get<ContentM>(this.baseurl+'/affiche')
  }
}
