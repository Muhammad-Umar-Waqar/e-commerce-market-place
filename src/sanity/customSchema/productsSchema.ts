export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
        fields: [
          {
            name: 'alt',
            title: 'Alt Text',
            type: 'string',
          },
        ],
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number',
      },
      {
        name: 'rating',
        title: 'Rating',
        type: 'number',
      },
      {
        name: 'tags',
        title: 'Tags',
        type: 'array',
        of: [{ type: 'string' }],
      },
      {
        name: 'discountPercentage',
        title: 'Discount Percentage',
        type: 'number',
      },
    ],
  };
  