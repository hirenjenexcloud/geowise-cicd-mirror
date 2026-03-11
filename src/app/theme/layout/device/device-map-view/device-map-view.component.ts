import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApisService } from 'src/app/theme/shared/services/apis.service';

declare var google: any;   // ✅ important

@Component({
  selector: 'app-device-map-view',
  templateUrl: './device-map-view.component.html',
  styleUrls: ['./device-map-view.component.scss']
})
export class DeviceMapViewComponent implements OnInit, OnDestroy {

  lat: number = 28.6139;
  lng: number = 77.2090;
  zoom: number = 15;
  google: any;
  map: any;
  polyline: any;
  deviceMarker: any;


  polylineOptions: any;

  path: Array<{
    lat: number;
    lng: number;
    rotation: number;
  }> = [];

  intervalId: any;
  currentIndex = 0;
  selectedImei: string = '';
  imeiList: string[] = [];

  constructor(private deviceService: ApisService) { }

  ngOnInit(): void {

     // API call on component load
    this.deviceService.getDevices(this.selectedImei)
      .subscribe((res: any) => {
        console.log('Device Data:', res);
        this.imeiList = res.data.devices.map((device: any) => device.imei);
      });

  }

  getRotationAngle(p1: any, p2: any): number {
    const dy = p2.lat - p1.lat;
    const dx = p2.lng - p1.lng;
    const theta = Math.atan2(dy, dx);
    return theta * (180 / Math.PI);
  }

  onMapReady(mapInstance: any) {
    this.map = mapInstance;


    this.polyline = new google.maps.Polyline({
      map: this.map,
      path: [],
      strokeColor: '#008000',
      strokeWeight: 3,
      icons: [
        {
          icon: {
            path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
            scale: 4,
            strokeColor: 'green',
            fillColor: 'green',
            fillOpacity: 1
          },
          offset: '100%',
          // repeat: '50px'
        }
      ]
    });


    this.deviceMarker = new google.maps.Marker({
      map: this.map,
      position: { lat: this.lat, lng: this.lng },
      icon: {
        path: google.maps.SymbolPath.STOP,
        scale: 6,
        strokeColor: 'red',
        fillColor: 'red',
        fillOpacity: 1,
        rotation: 0
      }
    });

    this.loadDeviceHistory();
  }


  loadDeviceHistory() {

    console.log("Loading device history......");

    const infoWindow = new google.maps.InfoWindow();

    this.deviceService.getDeviceHistory(this.selectedImei)
      .subscribe((res: any) => {

        if (!res || !res.data || !res.data.data || !res.data.data.length) {
          console.log("No history found");
          return;
        }

        const history = res.data.data;

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const tomorrow = new Date(today);
        tomorrow.setDate(today.getDate() + 1);

        const todayHistory = history.filter(function (item: any) {

          if (!item.createdAt) return false;

          const createdAt = new Date(item.createdAt);
          return createdAt >= today && createdAt < tomorrow;

        });

        if (!todayHistory.length) {
          console.log("No records found for today");
          return;
        }

        todayHistory.sort(function (a: any, b: any) {
          return new Date(a.createdAt).getTime() -
            new Date(b.createdAt).getTime();
        });

        for (let i = 0; i < todayHistory.length; i++) {

          const item = todayHistory[i];

          if (!item.deviceData ||
            !item.deviceData.location ||
            item.deviceData.location.lat == null ||
            item.deviceData.location.long == null) {
            continue;
          }

          const lat = item.deviceData.location.lat;
          const lng = item.deviceData.location.long;

          const latLng = new google.maps.LatLng(lat, lng);

          const marker = new google.maps.Marker({
            position: latLng,
            map: this.map,
            title: "Device Location",
            icon: {
              path: google.maps.SymbolPath.CIRCLE,
              scale: 4,
              fillColor: "#ff0000",
              fillOpacity: 1,
              strokeWeight: 0
            }
          });

          // ✅ Marker click event
          marker.addListener("click", () => {

            const content = `
            <div>
              <strong>Latitude:</strong> ${lat} <br/>
              <strong>Longitude:</strong> ${lng}
            </div>
          `;

            infoWindow.setContent(content);
            infoWindow.open(this.map, marker);

          });

        }

        const last = todayHistory[todayHistory.length - 1];

        if (last && last.deviceData && last.deviceData.location) {

          this.map.panTo({
            lat: last.deviceData.location.lat,
            lng: last.deviceData.location.long
          });

        }

      }, (error) => {
        console.error("Error loading device history:", error);
      });
  }




  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }
}
