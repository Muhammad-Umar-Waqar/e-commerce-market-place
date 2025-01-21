export default {
  name: 'customer',
  title: 'Customer',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule:any) => Rule.email().required(),
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'string',
      invert: false,
    },
  ],
};