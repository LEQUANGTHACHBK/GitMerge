import { NgModule } from '@angular/core';

//Products
import { AllProductsModule } from './Products/All_Products/allProducts.module';
import { CategoriesModule } from './Products/Categories/categories.module';
import { InventorysModule } from './Products/Inventory/inventory.module';

import { OrdersModule } from './Orders/orders.module';
import { SalesModule } from './Sales/sales.module'
@NgModule({
    imports: [
        // Products
        AllProductsModule,
        CategoriesModule,
        InventorysModule,

        OrdersModule,
        SalesModule

    ],
    exports:[
    ]
})
export class MultiSalesModule
{

}
