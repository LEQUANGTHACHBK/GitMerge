import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { MaterialModule } from '../../../angular-Material/material.module';
import { AllProductsComponent} from './allProducts.component'

const routes = [
    {
        path: 'multisales/products/all',
        component: AllProductsComponent
    }
];

@NgModule({
    declarations: [
        AllProductsComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        TranslateModule,
        FuseSharedModule,
        MaterialModule
    ],
    exports: [
        AllProductsComponent,
    ]
})

export class AllProductsModule
{
}
