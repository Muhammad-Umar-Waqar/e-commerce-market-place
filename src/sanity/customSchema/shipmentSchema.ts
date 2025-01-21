export default {
    name: 'shipment',
    title: 'Shipment',
    type: 'document',
    fields: [
      {
        name: 'order',
        title: 'Order',
        type: 'reference',
        to: [{ type: 'order' }],
      },
      {
        name: 'customer',
        title: 'Customer',
        type: 'reference',
        to: [{ type: 'customer' }],
      },
      {
        name: 'shipment_status',
        title: 'Shipment Status',
        type: 'string',
        options: {
          list: ['Pending', 'Shipped', 'In Transit', 'Delivered'], // You can add more statuses here
          layout: 'radio',
        },
      },
      {
        name: 'tracking_number',
        title: 'Tracking Number',
        type: 'string',
      },
      {
        name: 'carrier',
        title: 'Carrier',
        type: 'string',
      },
      {
        name: 'shipping_label_url',
        title: 'Shipping Label URL',
        type: 'url',
      },
      {
        name: 'shipment_date',
        title: 'Shipment Date',
        type: 'datetime',
      },
      {
        name: 'estimated_delivery_date',
        title: 'Estimated Delivery Date',
        type: 'datetime',
      },
    ],
  };
  