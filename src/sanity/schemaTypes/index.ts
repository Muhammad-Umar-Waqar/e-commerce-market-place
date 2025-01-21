import { type SchemaTypeDefinition } from 'sanity'
import orderSchema from '../customSchema/orderSchema'
import customerSchema from '../customSchema/customerSchema'
import productsSchema from '../customSchema/productsSchema'
import shipmentSchema from '../customSchema/shipmentSchema'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [customerSchema, orderSchema, productsSchema, shipmentSchema],
}
