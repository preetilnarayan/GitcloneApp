import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {

  username: any;

  constructor() { }

  ngOnInit(): void {

    this.username=localStorage.getItem('USERNAME');
  }

}
