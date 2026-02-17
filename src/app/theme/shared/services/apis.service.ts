import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: "root",
})
export class ApisService {
  constructor(private http: HttpClient) {}

  // Auth Module
  login(credentials: any) {
    return this.http.post("/api/auth/login", credentials);
  }

  // Device Module
  getDevices() {
    return this.http.get("/api/device");
  }

  addDevice(device: any) {
    return this.http.post("/api/device", device);
  }

  updateDevice(device: any) {
    return this.http.put(`/api/device`, device);
  }

  deleteDevice(id: string) {
    return this.http.delete(`/api/device/${id}`);
  }

  getDeviceHistory(imei: string) {
    return this.http.get("/api/device/history" + "?imei=" + imei);
  }

  // Group Module

  getGroups(query = "") {
    return this.http.get("/api/groups" + query);
  }

  addGroup(group: any) {
    return this.http.post("/api/groups", group);
  }

  updateGroup(id: string, group: any) {
    return this.http.put(`/api/groups/${id}`, group);
  }

  deleteGroup(id: string) {
    return this.http.delete(`/api/groups/${id}`);
  }

  importDevicesToGroup(data: any) {
    return this.http.post("/api/groups/import", data);
  }

  // Firmware Module

  addFirmware(firmware: any) {
    console.log("Adding Firmware:", firmware);
    return this.http.post("/api/firmware", firmware);
  }

  getFirmwares(page: number, limit: number) {
    return this.http.get(`/api/firmware?page=${page}&limit=${limit}`);
  }

  updateFirmware(firmware: any, id: any) {
    console.log("Updating Firmware:", firmware);
    return this.http.put(`/api/firmware/${id}`, firmware);
  }

  deleteFirmware(id: string) {
    console.log("Deleting Firmware with ID:", id);
    return this.http.delete(`/api/firmware/${id}`);
  }

  getAllFirmwares() {
    return this.http.get(`/api/firmware`);
  }

  // Settings Module
  getSettings() {
    return this.http.get("/api/settings");
  }

  addSetting(data: any) {
    return this.http.post("/api/settings", data);
  }

  updateSetting(id: string, data: any) {
    return this.http.put(`/api/settings/${id}`, data);
  }

  deleteSetting(id: string) {
    return this.http.delete(`/api/settings/${id}`);
  }
}
