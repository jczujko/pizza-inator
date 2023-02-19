import { type PizzaMenu } from '../utils/types'
import Ajv from 'ajv'
import { type JSONSchemaType } from 'ajv/dist/core'

const pizzaMenuScheme: JSONSchemaType<PizzaMenu> = {
  type: 'object',
  properties: {
    priceTag: { type: 'string' },
    sizes: { type: 'array', items: { type: 'string' } },
    pizzas: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          ingredients: { type: 'array', items: { type: 'string' } },
          name: { type: 'string' },
          prices: { type: 'array', items: { type: 'number' } }
        },
        required: ['ingredients', 'name', 'prices']
      }
    }
  },
  required: ['pizzas', 'priceTag', 'sizes'],
  additionalProperties: false

}

export const pizzaMenuValidator = (pizzaMenu: PizzaMenu): boolean => {
  const ajv = new Ajv()
  const validate = ajv.compile(pizzaMenuScheme)
  return validate(pizzaMenu)
}
