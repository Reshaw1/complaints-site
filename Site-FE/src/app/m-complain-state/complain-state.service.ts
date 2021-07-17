import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Complain_State } from '../models/Complain_State';

@Injectable({
  providedIn: 'root'
})
export class ComplainStateService {
  baseUrl = "https://localhost:44391/api/complainState"
  constructor(private httpClient: HttpClient) { }

  getComplainState() {
    return this.httpClient.get(this.baseUrl + "/get")
  }

  createComplainState(complainState: Complain_State) {
    return this.httpClient.post(this.baseUrl + "/create", JSON.parse(JSON.stringify(complainState)), {responseType: "text"})
  }

  updateComplainState(complainState: Complain_State) {
    return this.httpClient.put(this.baseUrl + "/update", JSON.parse(JSON.stringify(complainState)), {responseType: "text"})
  }

  deleteComplainState(id: number) {
    return this.httpClient.delete(this.baseUrl + "/delete/" + id, {responseType: "text"})
  }
}
