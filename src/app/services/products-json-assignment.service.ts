
import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

@Injectable({

  providedIn: 'root'

})

export class ProductsJsonAssignmentService {

  private url:string = "assets/products.json"

  constructor(private httpClient:HttpClient){}

  getProductsInfo(){

    return this.httpClient.get(this.url)

  }

}