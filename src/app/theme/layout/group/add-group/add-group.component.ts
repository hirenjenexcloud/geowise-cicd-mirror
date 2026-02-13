import { Component, OnInit } from '@angular/core';
import { ApisService } from 'src/app/theme/shared/services/apis.service';
 
@Component({
  selector: 'app-add-group',
  templateUrl: './add-group.component.html',
  styleUrls: ['./add-group.component.scss']
})
export class AddGroupComponent implements OnInit {
 
  constructor(private groupService: ApisService) { }
 
  ngOnInit() {
    this.loadFirmwares();
    this.loadSettings();
  }
 
  group: any = {
    grpName: '',
    fwId: '',
    settingId: '',
    hwVersion: '',
    swVersion: '',
    desc: ''
  };
 
  firmwareList: any[] = [];
  settingList: any[] = [];
 
  loadFirmwares() {
    this.groupService.getFirmwares().subscribe((res: any) => {
      this.firmwareList = res.data.data;
    });
  }
 
  loadSettings() {
    this.groupService.getSettings().subscribe((res: any) => {
      this.settingList = res.data.settings;
    });
  }
 
 
  onSubmit() {
    this.groupService.addGroup(this.group).subscribe(
      (response: any) => {
        alert('Group Created Successfully');
        console.log(response);
      },
      (error: any) => {
        alert('Error Creating Group');
        console.error(error);
      }
    );
  }
 
}