import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { FuseConfigService } from "@fuse/services/config.service";
import { fuseAnimations } from "@fuse/animations";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: "orders",
  templateUrl: "./orders.component.html",
  styleUrls: ["./orders.component.scss"],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class OrdersComponent implements OnInit {
  constructor(private http: HttpClient ) {}

  title = "Order";

  // columnDefs = [
  //   { headerName: "Order", field: "order", sortable: true , filter: true},
  //   { headerName: "Updated at", field: "updated" ,sortable: true, filter: true },
  //   { headerName: "Customer", field: "customer" , sortable: true, filter: true },
  //   { headerName: "Advisor", field: "advisor" ,sortable: true, filter: true },
  //   { headerName: "Total", field: "total" ,sortable: true, filter: true }
  // ];

  // rowData = [
  //   { order: "#1003", updated: "20/02/2020 19:00", customer: "Lim Chang Siang", advisor: "Flona Lim", total: 2380.000  },
  //   { order: "#1004", updated: "20/02/2020 20:00", customer: "Tong Quoc Sang", advisor: "Nathalie", total: 3000.000  },
  //   { order: "#1005", updated: "22/02/2020 20:00", customer: "Le Quang Thach", advisor: "Nathalie", total: 2500.000  },
  // ];

  columnDefs = [
    {headerName: 'make', field: 'make', sortable: true, filter: true, checkboxSelection: true },
    {headerName: 'model', field: 'model', sortable: true, filter: true },
    {headerName: 'price', field: 'price', sortable: true, filter: true }
  ];

  rowData: any;

  ngOnInit(): void {
    this.rowData = this.http.get('https://api.myjson.com/bins/15psn9');
  }
}
