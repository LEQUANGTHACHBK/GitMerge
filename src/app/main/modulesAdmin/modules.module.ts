import { NgModule } from '@angular/core';

//Products
import { EntitySettingModule } from './GeneralSettings/entitySettings/entitySetting.module';
import { TransactionManagementModule } from './GeneralSettings/transactionManagement/transactionManagement.module';
import { UserManagementModule } from './GeneralSettings/userManagement/userManagement.module'

import { OrcModule } from './OCR/ocr.module';

import { OtcAPInvoiceModule } from './OrderToCash/APInvoice/otcAPInvoice.module';
import { OtcRequestModule } from './OrderToCash/RequestForQuote/otcRequest.module';
import { OtcPurchaseOrderModule } from './OrderToCash/purchaseOrder/otcPurchaseOrder.module';


import { PtpAPInvoiceModule } from './PurchaseToPayment/APInvoice/ptpAPInvoice.module';
import { PtpRequestModule } from './PurchaseToPayment/RequestForQuote/ptpRequest.module';
import { PtpPurchaseOrderModule } from './PurchaseToPayment/purchaseOrder/ptpPurchaseOrder.module';
import { PtpPurchaseRequisitionModule } from './PurchaseToPayment/purchaseRequisition/ptpPurchaseRequisition.module'

@NgModule({
    imports: [
        // Products
        EntitySettingModule,
        TransactionManagementModule,
        UserManagementModule,

        OrcModule,

        OtcAPInvoiceModule,
        OtcRequestModule,
        OtcPurchaseOrderModule,

        PtpAPInvoiceModule,
        PtpRequestModule,
        PtpPurchaseOrderModule,
        PtpPurchaseRequisitionModule


    ],
    exports:[
    ]
})
export class ModulesModule
{

}
