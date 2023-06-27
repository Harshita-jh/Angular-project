import { Component } from '@angular/core';
import { ProductsAssignmentTenService } from '../services/products-assignment-ten.service';

@Component({
  selector: 'app-products-service-assignment-ten',
  templateUrl: './products-service-assignment-ten.component.html',
  styleUrls: ['./products-service-assignment-ten.component.css']
})
export class ProductsServiceAssignmentTenComponent {

  searchProd:string=""
  

  products:any = []
  constructor(productsAssignmentTenService:ProductsAssignmentTenService){
    this.products = productsAssignmentTenService.getProductsInfo()
  }
}
