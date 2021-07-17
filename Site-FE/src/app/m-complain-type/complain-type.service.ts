import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Complain_Type } from '../models/Complain_Type';

@Injectable({
  providedIn: 'root'
})
export class ComplainTypeService {
  baseUrl = "https://localhost:44391/api/complaintype"
  constructor(private httpClient: HttpClient) { }

  getComplainType() {
    return this.httpClient.get(this.baseUrl + "/get")
  }

  createComplainType(complainType: Complain_Type) {
    return this.httpClient.post(this.baseUrl + "/create", JSON.parse(JSON.stringify(complainType)), {responseType: "text"})
  }

  updateComplainType(complainType: Complain_Type) {
    return this.httpClient.put(this.baseUrl + "/update", JSON.parse(JSON.stringify(complainType)), {responseType: "text"})
  }

  deleteComplainType(id: number) {
    return this.httpClient.delete(this.baseUrl + "/delete/" + id, {responseType: "text"})
  }
}
