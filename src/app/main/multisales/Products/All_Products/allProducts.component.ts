import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';

import { FuseConfigService} from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations'
@Component({
  selector: 'allProducts',
  templateUrl: './allProducts.component.html',
  styleUrls: ['./allProducts.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations : fuseAnimations
})
export class AllProductsComponent implements OnInit {

  constructor(){}

  ngOnInit(): void {

  }

}
