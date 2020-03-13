import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';
import { animation } from '@angular/animations';
@Component({
  selector: 'app-ngprime',
  templateUrl: './ngprime.component.html',
  styleUrls: ['./ngprime.component.scss'],
  // encapsulation: ViewEncapsulation.Emulated,
  // animations :  fuseAnimations
})
export class NgprimeComponent implements OnInit {

  constructor(
    private _fuseConfigService: FuseConfigService
  ) { 
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
