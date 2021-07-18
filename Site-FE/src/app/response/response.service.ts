import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CResponse } from '../models/Response';

@Injectable({
  providedIn: 'root'
})
export class ResponseService {
  baseUrl = "https://localhost:44391/api/response"
  constructor(private httpClient: HttpClient) { }

  getResponse() {
    return this.httpClient.get(this.baseUrl + "/get")
  }

  createResponse(response: CResponse) {
    return this.httpClient.post(this.baseUrl + "/create", JSON.parse(JSON.stringify(response)), {responseType: "text"})
  }

  updateResponse(response: CResponse) {
    return this.httpClient.put(this.baseUrl + "/update", JSON.parse(JSON.stringify(response)), {responseType: "text"})
  }

  deleteResponse(id: number) {
    return this.httpClient.delete(this.baseUrl + "/delete/" + id, {responseType: "text"})
  }
}
