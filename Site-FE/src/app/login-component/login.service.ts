import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SysUser } from '../models/SysUser';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseUrl = "https://localhost:44391/api/SysUser"
  constructor(private httpClient: HttpClient) { }

  getUsers() {
    return this.httpClient.get(this.baseUrl + "/get")
  }

  createUser(user: SysUser) {
    return this.httpClient.post(this.baseUrl + "/create", JSON.parse(JSON.stringify(user)), {responseType: "text"})
  }
}
