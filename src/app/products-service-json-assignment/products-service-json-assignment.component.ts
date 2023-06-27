import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { ProductsJsonAssignmentService } from '../services/products-json-assignment.service';

@Component({
  selector: 'app-products-service-json-assignment',
  templateUrl: './products-service-json-assignment.component.html',
  styleUrls: ['./products-service-json-assignment.component.css']
})
export class ProductsServiceJsonAssignmentComponent {

  searchProd:string=""
  products:any = []

  constructor(productsJsonAssignmentService:ProductsJsonAssignmentService){

    productsJsonAssignmentService.getProductsInfo().subscribe((res: any) => this.products = res)

  }
}

