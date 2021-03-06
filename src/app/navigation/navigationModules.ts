import { FuseNavigation } from '@fuse/types';

export const navigationModules: FuseNavigation[] = [
    {
      id: 'modules',
      title: 'Modules',
      type: 'group',
      icon: '',
      url:'/modules',
      children: [
          {
            id: 'purchaseToPayment',
              title: 'Purchase to payment',
              type: 'collapsable',
              icon: 'widgets',
              children: [
                  {
                      id: 'ptpRequisition',
                      title: 'Purchase Requisition',
                      type: 'item',
                      url: '/modules/purchasetopayment/requisition'
                  },
                  {
                      id: 'ptpPurchaseOrder',
                      title: 'Purchase Order',
                      type: 'item',
                      url: '/modules/purchasetopayment/purchase'
                  },
                  {
                      id: 'ptpRequest',
                      title: 'Request for Quote',
                      type: 'item',
                      url: '/modules/purchasetopayment/request'
                  },
                  {
                    id: 'ptpAPInvoice',
                    title: 'AP Invoice',
                    type: 'item',
                    url: '/modules/purchasetopayment/apinvoice'
                },
              ]
          },
          {
            id: 'ocr',
              title: 'OCR',
              type: 'item',
              icon: 'event_note',
              url: '/modules/orc',
          },
          {
            id: 'orderToCash',
              title: 'Order to Cash',
              type: 'collapsable',
              icon: 'widgets',
              // svgIcon:'group765',
              children: [
                  {
                      id: 'otcPurchaseOrder',
                      title: 'Purchase Order',
                      type: 'item',
                      url: '/modules/ordertocash/purchase'
                  },
                  {
                      id: 'otcRequest',
                      title: 'Request for Quote',
                      type: 'item',
                      url: '/modules/ordertocash/request'
                  },
                  {
                    id: 'otcAPInvoice',
                    title: 'AP Invoice',
                    type: 'item',
                    url: '/modules/ordertocash/apinvoice'
                },
              ]
          },
          {
            id: 'directSales',
              title: 'Multi Tier Direct Sales',
              type: 'item',
              svgIcon: 'group765',
              url: '/multisales/products/all',
              redirect: true ,
              // externalUrl:true,
          },
          {
            id: 'setting',
              title: 'General Settings',
              type: 'collapsable',
              icon: 'settings',
              children: [
                  {
                      id: 'userManagement',
                      title: 'User Management',
                      type: 'item',
                      url: '/modules/setting/users'
                  },
                  {
                      id: 'entitySettings',
                      title: 'Entity Settings',
                      type: 'item',
                      url: '/modules/setting/entity'
                  },
                  {
                    id: 'transactionManagement',
                    title: 'Transaction Management',
                    type: 'item',
                    url: '/modules/setting/transaction'
                },
              ]
          },
      ]
    },
];

