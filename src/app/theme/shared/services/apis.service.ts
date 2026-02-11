import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApisService {

  constructor(private http: HttpClient) { }

  // Device Module
   getDevices() {
    return this.http.get('/api/device');
  }

  addDevice(device: any) {
    return this.http.post('/api/device', device);
  }

  updateDevice(device: any) {
    return this.http.put(`/api/device`, device);
  }

  deleteDevice(id: string) {
    return this.http.delete(`/api/device/${id}`);
  }



  // Group Module

  getGroups() {
    return this.http.get('/api/groups');
  }

  addGroup(group: any) {
    return this.http.post('/api/groups', group);
  }

  updateGroup(group: any) {
    return this.http.put(`/api/groups`, group);
  }

  deleteGroup(id: string) {
    return this.http.delete(`/api/groups/${id}`);
  }

}
