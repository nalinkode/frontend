import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
 import { Observable } from 'rxjs';
 import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  readonly rootUrl = "http://localhost:8080";
  private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };

  constructor(public http : HttpClient) { }



  addproduct(Product) :Observable<any>{
    return this.http.post<any>( this.rootUrl + '/add/product',Product)
  }; 

  getProductlist(Product){
    debugger
    return this.http.get<any>(this.rootUrl + '/product/list', Product);
  };

  ondelete(data: number): Observable<any> {
    return this.http.delete<any>(this.rootUrl + '/delete/product/' + data);
  };

  updateProduct(currentProduct):Observable<any>{
  
    debugger
    return this.http.put<any>(this.rootUrl +'/update/product',this.options);
  };

  uploadImage(upload):Observable<any>{
  	let headers = new Headers();
		headers.append('Content-Type', 'multipart/form-data');
    debugger
    return this.http.put<any>(this.rootUrl + '/add/product',Product)
  };
  
}
