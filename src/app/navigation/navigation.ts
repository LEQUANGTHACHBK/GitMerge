import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
      id: 'multisales',
      title: 'Multi Tier Direct Sales',
      type: 'group',
      icon: '',
      url:'/multisales',
      children: [
          {
            id: 'products',
              title: 'Products',
              type: 'collapsable',
              icon: 'widgets',
              children: [
                  {
                      id: 'allProducts',
                      title: 'All Products',
                      type: 'item',
                      url: '/multisales/products/all'
                  },
                  {
                      id: 'categories',
                      title: 'Categories',
                      type: 'item',
                      url: '/multisales/products/categories'
                  },
                  {
                      id: 'inventory',
                      title: 'Inventory',
                      type: 'item',
                      url: '/multisales/products/inventory'
                  },

              ]
          },
          {
            id: 'orders',
              title: 'Orders',
              type: 'item',
              icon: 'event_note',
              url: '/multisales/orders',
          },
          {
            id: 'sales',
              title: 'Sales',
              type: 'item',
              icon: 'assessment',
              url: '/multisales/sales',
          }
      ]
    },
    // {
    //   id: 'modules',
    //   title: 'Modules',
    //   type: 'group',
    //   icon: '',
    //   url:'/modules',
    //   children: [
    //       {
    //         id: 'purchaseToPayment',
    //           title: 'Purchase to payment',
    //           type: 'collapsable',
    //           icon: 'widgets',
    //           children: [
    //               {
    //                   id: 'ptpRequisition',
    //                   title: 'Purchase Requisition',
    //                   type: 'item',
    //                   url: '/modules/purchasetopayment/requisition'
    //               },
    //               {
    //                   id: 'ptpPurchaseOrder',
    //                   title: 'Purchase Order',
    //                   type: 'item',
    //                   url: '/modules/purchasetopayment/purchase'
    //               },
    //               {
    //                   id: 'ptpRequest',
    //                   title: 'Request for Quote',
    //                   type: 'item',
    //                   url: '/modules/purchasetopayment/request'
    //               },
    //               {
    //                 id: 'ptpAPInvoice',
    //                 title: 'AP Invoice',
    //                 type: 'item',
    //                 url: '/modules/purchasetopayment/apinvoice'
    //             },
    //           ]
    //       },
    //       {
    //         id: 'ocr',
    //           title: 'OCR',
    //           type: 'item',
    //           icon: 'event_note',
    //           url: '/modules/orc',
    //       },
    //       {
    //         id: 'orderToCash',
    //           title: 'Order to Cash',
    //           type: 'collapsable',
    //           icon: 'widgets',
    //           children: [
    //               {
    //                   id: 'otcPurchaseOrder',
    //                   title: 'Purchase Order',
    //                   type: 'item',
    //                   url: '/modules/ordertocash/purchase'
    //               },
    //               {
    //                   id: 'otcRequest',
    //                   title: 'Request for Quote',
    //                   type: 'item',
    //                   url: '/modules/ordertocash/request'
    //               },
    //               {
    //                 id: 'otcAPInvoice',
    //                 title: 'AP Invoice',
    //                 type: 'item',
    //                 url: '/modules/ordertocash/apinvoice'
    //             },
    //           ]
    //       },
    //       {
    //         id: 'directSales',
    //           title: 'Multi Tier Direct Sales',
    //           type: 'item',
    //           icon: 'assessment',
    //           url: '/multisales/sales',
    //       },
    //       {
    //         id: 'setting',
    //           title: 'General Settings',
    //           type: 'collapsable',
    //           icon: 'settings',
    //           children: [
    //               {
    //                   id: 'userManagement',
    //                   title: 'User Management',
    //                   type: 'item',
    //                   url: '/modules/setting/users'
    //               },
    //               {
    //                   id: 'entitySettings',
    //                   title: 'Entity Settings',
    //                   type: 'item',
    //                   url: '/modules/setting/entity'
    //               },
    //               {
    //                 id: 'transactionManagement',
    //                 title: 'Transaction Management',
    //                 type: 'item',
    //                 url: '/modules/setting/transaction'
    //             },
    //           ]
    //       },
    //   ]
    // },
];
