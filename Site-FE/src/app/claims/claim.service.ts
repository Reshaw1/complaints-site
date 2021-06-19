import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Claim } from '../models/Claim';

@Injectable({
  providedIn: 'root'
})
export class ClaimService {
  baseUrl = "https://localhost:44391/api/claim"
  constructor(private httpClient: HttpClient) { }

  getClaims() {
    return this.httpClient.get(this.baseUrl + "/get")
  }

  getDepartement() {
    return this.httpClient.get(this.baseUrl.replace("claim", "department") + "/get")
  }

  getClaimState() {
    return this.httpClient.get(this.baseUrl + "state" + "/get")
  }

  getClaimType() {
    return this.httpClient.get(this.baseUrl + "type" + "/get")
  }

  getPersons() {
    return this.httpClient.get(this.baseUrl + "/getPersons")
  }

  createClaim(claim: Claim) {
    return this.httpClient.post(this.baseUrl + "/create", JSON.parse(JSON.stringify(claim)), {responseType: "text"})
  }

  updateClaim(claim: Claim) {
    return this.httpClient.put(this.baseUrl + "/update", JSON.parse(JSON.stringify(claim)), {responseType: "text"})
  }

  deleteClaim(id: number) {
    return this.httpClient.delete(this.baseUrl + "/delete/" + id, {responseType: "text"})
  }
}
