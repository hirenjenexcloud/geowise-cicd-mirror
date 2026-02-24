import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ApisService {
  constructor(private http: HttpClient) {}

  // Auth Module
  login(credentials: any) {
    return this.http.post("/api/auth/signin", credentials);
  }

  signup(data: any) {
    return this.http.post("/api/auth/signup", data);
  }

  // Device Module
  getDevices(query = "") {
    return this.http.get("/api/device" + query);
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
  //   getDeviceHistory(imei: string, from?: string, to?: string) {
  //   let url = `/api/device/history?imei=${imei}`;

  //   if (from && to) {
  //     url += `&from=${from}&to=${to}`;
  //   }

  //   return this.http.get(url);
  // }

  // Group Module

  getGroups(query = "") {
    return this.http.get("/api/groups" + query);
  }

  getGrps() {
    return this.http.get(`/api/groups`);
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

  getDevicesByGroup(grpId: string) {
    return this.http.get(`/api/groups/device/${grpId}`);
  }

  // Firmware Module

  addFirmware(firmware: any) {
    console.log("Adding Firmware:", firmware);
    return this.http.post("/api/firmware", firmware);
  }

  getFirmwares(query = "") {
    return this.http.get(`/api/firmware${query}`);
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
  getSettings(page: number = 1, limit: number = 10) {
    return this.http.get(`/api/settings?page=${page}&limit=${limit}`);
  }

  getAllSettings() {
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
