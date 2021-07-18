import { Claim } from "./Claim"
import { Person } from "./Person"

export class CResponse {
  ID: number
  date: Date
  content: string
  person: Person
  claim: Claim
}
