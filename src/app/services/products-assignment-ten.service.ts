import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsAssignmentTenService {

  products =[

    {productImg:"assets/samsungTv.jpg", productId:1000012, productName:"Samsung TV", productPrice:"Rs. 70000", productDesc:"Discover a new movie or show, every time you turn on your TV."},
    {productImg:"assets/lgTv.jpeg", productId:1000022, productName:"LG TV", productPrice:"Rs. 80000", productDesc:"Discover a new movie or show, every time you turn on your TV."},
    {productImg:"assets/oneplusTv.jpeg", productId:1000032, productName:"Oneplus TV", productPrice:"Rs. 90000", productDesc:"Discover a new movie or show, every time you turn on your TV."},
    {productImg:"assets/oneplusM.jpeg", productId:1000042, productName:"Oneplus Mobile", productPrice:"Rs. 70000", productDesc:" OnePlus primarily creates Android smartphones. In its early days, it was known for making high-powered phones with unique design elements and low price tags."},
    {productImg:"assets/appleM.jpeg", productId:1000052, productName:"Apple mobile", productPrice:"Rs. 90000", productDesc:"The iPhone is a smartphone made by Apple that combines a computer, iPod, digital camera and cellular phone into one device with a touchscreen interface."},
    {productImg:"assets/samsungM.jpeg", productId:1000062, productName:"Samsung Mobile", productPrice:"Rs. 80000", productDesc:"Samsung Galaxy is a series of computing and mobile computing devices that are designed, manufactured and marketed by Samsung Electronics."}
   
    ]
    getProductsInfo(){
      return this.products
    }
}