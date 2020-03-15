import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';

import { FuseConfigService} from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';

import { HttpClient } from '@angular/common/http';
import { ActiveCellCustomComponent } from './active-cell/active-cell.component'; //Yes or No

@Component({
  selector: 'inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations : fuseAnimations
})
export class InventoryComponent implements OnInit {


  constructor(private http: HttpClient){
  }

  title = "Inventory";

  columnDefs = [
    { headerName: "Products", field: "products", width: 400 },
    { headerName: "Category", field: "category", width: 200  },
    { headerName: "Available", field: "available", width: 150, cellStyle: {textAlign: "center"}  },
    { headerName: "Price", field: "price",width: 150, cellStyle: {textAlign: "right"}, cellClass:"price" },
    { headerName: "Active", field: "active",width: 100, cellStyle: { 'justify-content': "center" } , "cellRendererFramework": ActiveCellCustomComponent } //Yes or No
  ];

  rowData = [
    { products: "Thermomix TM6", category: "Thermomix", available: "1233", price: "SGD 2,388.000", active: 1  },
    { products: "Thermomix TM8", category: "Thermomix", available: "234", price: "SGD 3,388.000", active: 0  },
    { products: "Thermomix TM9", category: "Thermomix", available: "666", price: "SGD 4,388.000", active: 1  },
  ];

  // columnDefs = [
  //   {headerName: 'make', field: 'make', sortable: true, filter: true, checkboxSelection: true },
  //   {headerName: 'model', field: 'model', sortable: true, filter: true },
  //   {headerName: 'price', field: 'price', sortable: true, filter: true }
  // ];

  // rowData: any;

  ngOnInit(): void {
    // this.rowData = this.http.get('https://api.myjson.com/bins/15psn9');
  }

}
