import { Claim_State } from "./Claim_State"
import { Claim_Type } from "./Claim_Type"
import { Department } from "./Department"
import { Person } from "./Person"

export class Claim {
  ID: number
  date: Date
  description: string
  person: Person
  department: Department
  type: Claim_Type
  state: Claim_State
}
