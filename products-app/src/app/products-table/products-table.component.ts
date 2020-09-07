import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../models/product.model';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.css']
})
export class ProductsTableComponent implements OnInit {

  products: Product[];

  prodColumns: string[] =["id", "name","department","price","description"];

  @ViewChild(MatTable) datatable: MatTable<any>;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products =this.productService.getProducts();
    this.productService.onNewProduct.subscribe((p) => {
          console.log(p);
          this.datatable.renderRows();
        }
    );
  }

}
