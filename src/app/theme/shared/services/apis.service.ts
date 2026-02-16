import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApisService {

  constructor(private http: HttpClient) { }

  // Auth Module
  login(credentials: any) {
    return this.http.post('/api/auth/login', credentials);
  }

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

  getDeviceHistory(imei: string) {
    return this.http.get('/api/device/history' + '?imei=' + imei);
  }

  // Group Module

  getGroups(query = '') {
    return this.http.get('/api/groups' + query);
  }

  addGroup(group: any) {
    return this.http.post('/api/groups', group);
  }

  updateGroup(id: string,group: any) {
    return this.http.put(`/api/groups/${id}`, group);
  }

  deleteGroup(id: string) {
    return this.http.delete(`/api/groups/${id}`);
  }


  // Firmware Module

  addFirmware(firmware: any) {
    console.log('Adding Firmware:', firmware);
    return this.http.post('/api/firmware', firmware);
  }


  getFirmwares() {
    return this.http.get('/api/firmware');
  }
 
  getSettings() {
    return this.http.get('/api/settings');
  }



  

 

}
