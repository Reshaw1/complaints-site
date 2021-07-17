import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Department } from '../models/Department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  baseUrl = "https://localhost:44391/api/department"
  constructor(private httpClient: HttpClient) { }

  getDepartment() {
    return this.httpClient.get(this.baseUrl + "/get")
  }

  createDepartment(department: Department) {
    return this.httpClient.post(this.baseUrl + "/create", JSON.parse(JSON.stringify(department)), {responseType: "text"})
  }

  updateDepartment(department: Department) {
    return this.httpClient.put(this.baseUrl + "/update", JSON.parse(JSON.stringify(department)), {responseType: "text"})
  }

  deleteDepartment(id: number) {
    return this.httpClient.delete(this.baseUrl + "/delete/" + id, {responseType: "text"})
  }
}
