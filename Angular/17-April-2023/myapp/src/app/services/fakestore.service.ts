import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FakestoreService {

  constructor( private http: HttpClient ) { }

  getProducts() {
    // this.http.get("https://fakestoreapi.com/products")
    // .subscribe((res) => res)

    //we use subscribe() so we can't cast to json

    // fetch('https://fakestoreapi.com/products')
    //         .then(res=>res.json())
    //         .then(json=>console.log(json))

    return this.http.get("https://fakestoreapi.com/products");
  }
}
