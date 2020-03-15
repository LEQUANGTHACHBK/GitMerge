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
];
