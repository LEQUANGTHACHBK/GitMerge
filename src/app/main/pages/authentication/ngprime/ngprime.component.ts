import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';
import { animation } from '@angular/animations';
import {SelectItem} from 'primeng/api';
import * as dialCode from '../../../../../assets/dialcode.json';

interface CAR
{
  label: string;
  value: string;
}
interface DIA
{
  isoCode: string;
  name: string;
  callingCode: string;
  alpha3Code: string;
}
@Component({
  selector: 'app-ngprime',
  templateUrl: './ngprime.component.html',
  styleUrls: ['./ngprime.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  animations :  fuseAnimations
})
export class NgprimeComponent implements OnInit {
  cars: CAR[]
  dias = [];
  selectedCar: string;
  selectDial :string;
  constructor(
    private _fuseConfigService: FuseConfigService
  ) { 
    console.log(dialCode);
    this.dias = dialCode["mtCountryDtoList"];
    this.cars = [
      { label: 'Audi', value: 'Audi' },
      { label: 'BMW', value: 'BMW' },
      { label: 'Fiat', value: 'Fiat' },
      { label: 'Ford', value: 'Ford' },
      { label: 'Honda', value: 'Honda' },
      { label: 'Jaguar', value: 'Jaguar' },
      { label: 'Mercedes', value: 'Mercedes' },
      { label: 'Renault', value: 'Renault' },
      { label: 'VW', value: 'VW' },
      { label: 'Volvo', value: 'Volvo' },
    ];
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

  ngOnInit(): void {
  }

}

