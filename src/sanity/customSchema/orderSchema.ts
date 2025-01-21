export default {
    name: 'order',
    title: 'Order',
    type: 'document',
    fields: [
      {
        name: 'customer',
        title: 'Customer',
        type: 'reference',
        to: [{ type: 'customer' }],
      },
      {
        name: 'cart',
        title: 'Cart',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              { name: 'id', title: 'Product ID', type: 'string' },
              { name: 'name', title: 'Product Name', type: 'string' },
              { name: 'srcUrl', title: 'Product Image URL', type: 'url' },
              { name: 'price', title: 'Price', type: 'number' },
              { name: 'attributes', title: 'Attributes', type: 'array', of: [{ type: 'string' }] },
              { name: 'quantity', title: 'Quantity', type: 'number' },
            ],
          },
        ],
      },
      {
        name: 'totalPrice',
        title: 'Total Price',
        type: 'number',
      },
      
    ],
  };
  