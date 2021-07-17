import { Claim } from "./Claim"
import { Person } from "./Person"

export class Response {
  ID: number
  date: Date
  content: string
  person: Person
  claim: Claim
}
