import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';
import { animation } from '@angular/animations';
import { SelectItem } from 'primeng/api';
import * as CARS from '../../../../../assets/DC.json';
import * as DIALS from '../../../../../assets/dialcode.json';


@Component({
  selector: 'app-dialCode',
  templateUrl: './dialCode.component.html',
  styleUrls: ['./dialCode.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  animations: fuseAnimations
})
export class DialCodeComponent implements OnInit
{
  selectedCar: string;
  selectedDial: string;
  cars = (CARS as any).default; 
  dials = (DIALS as any).default; 
 constructor(
    private _fuseConfigService: FuseConfigService,
  )
  {
   
  //  this.dials = (DIALS as any).default;
    this._fuseConfigService.config = {
      layout: {
        navbar: {
          hidden: true
        },
        toolbar: {
          hidden: true
        },
        footer: {
          hidden: true
        },
        sidepanel: {
          hidden: true
        }
      }
    };
  }

  ngOnInit(): void
  {
  }

}

