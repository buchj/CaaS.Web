import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from 'src/app/shared/services/localstorage.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  

  appkey:string = "";
  identity:string = "";

  constructor(private ls:LocalstorageService) { }

  ngOnInit(): void {
  }

  login(){
    this.ls.activeAppKey = this.appkey;
  }

  

}
