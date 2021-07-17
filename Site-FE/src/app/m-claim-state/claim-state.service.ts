import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Complain_State } from '../models/Complain_State';

@Injectable({
  providedIn: 'root'
})
export class ClaimStateService {
  baseUrl = "https://localhost:44391/api/claimState"
  constructor(private httpClient: HttpClient) { }

  getClaimState() {
    return this.httpClient.get(this.baseUrl + "/get")
  }

  createClaimState(claimState: Complain_State) {
    return this.httpClient.post(this.baseUrl + "/create", JSON.parse(JSON.stringify(claimState)), {responseType: "text"})
  }

  updateClaimState(claimState: Complain_State) {
    return this.httpClient.put(this.baseUrl + "/update", JSON.parse(JSON.stringify(claimState)), {responseType: "text"})
  }

  deleteClaimState(id: number) {
    return this.httpClient.delete(this.baseUrl + "/delete/" + id, {responseType: "text"})
  }
}
