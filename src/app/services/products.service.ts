import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  // products =[

  //   {productId:101, productName:"samsung tv", productPrice:20000},
   
  //   {productId:102, productName:"lg tv", productPrice:10000},
   
  //   {productId:103, productName:"oneplus tv", productPrice:30000}
   
  //   ]

    getProductsInfo(){
      //return this.products
        //or

        return [
          {productId:1001, productName:"samsung tv", productPrice:20000},
   
          {productId:1002, productName:"lg tv", productPrice:10000},
   
          {productId:1003, productName:"oneplus tv", productPrice:30000}
   
        ]
    }
}
