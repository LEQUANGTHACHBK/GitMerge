import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { MaterialModule } from '../../../angular-Material/material.module';
import { CategoriesComponent} from './categories.component'

const routes = [
    {
        path: 'multisales/products/categories',
        component: CategoriesComponent
    }
];

@NgModule({
    declarations: [
        CategoriesComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        TranslateModule,
        FuseSharedModule,
        MaterialModule
    ],
    exports: [
        CategoriesComponent,
    ]
})

export class CategoriesModule
{
}
