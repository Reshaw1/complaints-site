import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Complain } from '../models/Complain';

@Injectable({
  providedIn: 'root'
})
export class ComplainService {
  baseUrl = "https://localhost:44391/api/complain"
  constructor(private httpClient: HttpClient) { }

  getComplain() {
    return this.httpClient.get(this.baseUrl + "/get")
  }

  getDepartement() {
    return this.httpClient.get(this.baseUrl.replace("complain", "department") + "/get")
  }

  getComplainState() {
    return this.httpClient.get(this.baseUrl + "state" + "/get")
  }

  getComplainType() {
    return this.httpClient.get(this.baseUrl + "type" + "/get")
  }

  getPersons() {
    return this.httpClient.get(this.baseUrl + "/getPersons")
  }

  createComplain(complain: Complain) {
    return this.httpClient.post(this.baseUrl + "/create", JSON.parse(JSON.stringify(complain)), {responseType: "text"})
  }

  updateComplain(complain: Complain) {
    return this.httpClient.put(this.baseUrl + "/update", JSON.parse(JSON.stringify(complain)), {responseType: "text"})
  }

  deleteComplain(id: number) {
    return this.httpClient.delete(this.baseUrl + "/delete/" + id, {responseType: "text"})
  }
}
