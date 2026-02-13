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

  // dummyRoute = [
  //   { lat: 28.6139, lng: 77.2090 },
  //   { lat: 28.6145, lng: 77.2100 },
  //   { lat: 28.6152, lng: 77.2110 },
  //   { lat: 28.6160, lng: 77.2120 },
  //   { lat: 28.6170, lng: 77.2135 },
  //   { lat: 28.6180, lng: 77.2150 }
  // ];

  constructor(private deviceService: ApisService) {}

  ngOnInit(): void {
    // this.deviceService.getDeviceHistory('353081090133664').subscribe((data: any) => {

    //   console.log("device history:", data);
    // })
    
    // setTimeout(() => {
    //   if (typeof google !== 'undefined' && google.maps) {
    //     this.polylineOptions = {
    //       strokeColor: '#008000',
    //       strokeWeight: 3,
    //       icons: [
    //         {
    //           icon: {
    //             path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
    //             scale: 4,
    //             strokeColor: 'green',
    //             fillColor: 'green',
    //             fillOpacity: 1
    //           },
    //           offset: '100%',
    //           repeat: '50px'
    //         }
    //       ]
    //     };
    //   }
    // }, 1000);

    // this.startDummyTracking();
  }

//   startDummyTracking() {

//     this.intervalId = setInterval(() => {

//       if (this.currentIndex < this.dummyRoute.length) {

//         const point = this.dummyRoute[this.currentIndex];
//         let rotation = 0;

//         if (this.currentIndex > 0) {
//           const prev = this.dummyRoute[this.currentIndex - 1];
//           rotation = this.getRotationAngle(prev, point);
//         }

//         this.lat = point.lat;
//         this.lng = point.lng;

//      const currentPath = this.polyline.getPath();
// currentPath.push(new google.maps.LatLng(point.lat, point.lng));

//         this.currentIndex++;
//       }

//     }, 2000);
//   }

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

  console.log("Loading device history...");

  this.deviceService.getDeviceHistory('353081090133664')
    .subscribe((res: any) => {

      console.log("Full API response:", res);

      if (!res || !res.data || !res.data.data || !res.data.data.length) {
        console.log("No history found");
        return;
      }

      const history = res.data.data;

      console.log("Device history records:", history.length);

      // ✅ Sort by createdAt
      history.sort(function (a: any, b: any) {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      });

      // ✅ Clear old polyline
      this.polyline.setPath([]);


      for (let index = 0; index < history.length; index++) {

    const item = history[index];
    const lat = item.deviceData.location.lat;
    const lng = item.deviceData.location.long;
    const latLng = new google.maps.LatLng(lat, lng);

    // Add point to polyline
    // this.polyline.getPath().push(latLng);

    // Move device marker
    this.deviceMarker.setPosition(latLng);
    this.map.panTo(latLng);

    new google.maps.Marker({
      position: latLng,
      map: this.map,
      icon: {
        path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
        scale: 4,
        strokeColor: 'green',
        fillColor: 'green',
        fillOpacity: 1,
        anchor: new google.maps.Point(0, 2) 
      }
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
