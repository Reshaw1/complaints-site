import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Claim_Type } from '../models/Claim_Type';

@Injectable({
  providedIn: 'root'
})
export class ClaimTypeService {
  baseUrl = "https://localhost:44391/api/claimType"
  constructor(private httpClient: HttpClient) { }

  getClaimType() {
    return this.httpClient.get(this.baseUrl + "/get")
  }

  createClaimType(claimType: Claim_Type) {
    return this.httpClient.post(this.baseUrl + "/create", JSON.parse(JSON.stringify(claimType)), {responseType: "text"})
  }

  updateClaimType(claimType: Claim_Type) {
    return this.httpClient.put(this.baseUrl + "/update", JSON.parse(JSON.stringify(claimType)), {responseType: "text"})
  }

  deleteClaimType(id: number) {
    return this.httpClient.delete(this.baseUrl + "/delete/" + id, {responseType: "text"})
  }
}
