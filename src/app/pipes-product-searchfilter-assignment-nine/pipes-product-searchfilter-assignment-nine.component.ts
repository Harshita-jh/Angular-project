import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes-product-searchfilter-assignment-nine',
  templateUrl: './pipes-product-searchfilter-assignment-nine.component.html',
  styleUrls: ['./pipes-product-searchfilter-assignment-nine.component.css']
})
export class PipesProductSearchfilterAssignmentNineComponent {

  searchProd:string=""
  products =[

    {productImg:"assets/samsungTv.jpg", productId:100001, productName:"Samsung TV", productPrice:"Rs. 70000", productDesc:"Discover a new movie or show, every time you turn on your TV."},
    {productImg:"assets/lgTv.jpeg", productId:100002, productName:"LG TV", productPrice:"Rs. 80000", productDesc:"Discover a new movie or show, every time you turn on your TV."},
    {productImg:"assets/oneplusTv.jpeg", productId:100003, productName:"Oneplus TV", productPrice:"Rs. 90000", productDesc:"Discover a new movie or show, every time you turn on your TV."},
    {productImg:"assets/oneplusM.jpeg", productId:100004, productName:"Oneplus Mobile", productPrice:"Rs. 70000", productDesc:" OnePlus primarily creates Android smartphones. In its early days, it was known for making high-powered phones with unique design elements and low price tags."},
    {productImg:"assets/appleM.jpeg", productId:100005, productName:"Apple mobile", productPrice:"Rs. 90000", productDesc:"The iPhone is a smartphone made by Apple that combines a computer, iPod, digital camera and cellular phone into one device with a touchscreen interface."},
    {productImg:"assets/samsungM.jpeg", productId:100006, productName:"Samsung Mobile", productPrice:"Rs. 80000", productDesc:"Samsung Galaxy is a series of computing and mobile computing devices that are designed, manufactured and marketed by Samsung Electronics."}
   
    ]
}
