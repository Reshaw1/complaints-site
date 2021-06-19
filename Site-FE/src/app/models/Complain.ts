import { Complain_State } from "./Complain_State"
import { Complain_Type } from "./Complain_Type"
import { Department } from "./Department"
import { Person } from "./Person"

export class Complain {
  ID: number
  date: Date
  description: string
  person: Person
  department: Department
  type: Complain_Type
  state: Complain_State
}
