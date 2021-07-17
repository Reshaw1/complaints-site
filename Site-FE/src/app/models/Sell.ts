import { Person } from "./Person"
import { Product } from "./Product"
import { Product_State } from "./Product_State"

export class Sell {
  ID: number
  date: Date
  product: Product
  product_state: Product_State
  person: Person
}
