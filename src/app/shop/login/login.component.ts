import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from 'src/app/shared/services/localstorage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  identity:string = "";
  constructor(private ls:LocalstorageService) { }

  ngOnInit(): void {
  }

  login(){
    let id:number = parseInt(this.identity);
    console.log(this.identity);
    this.ls.activeCustomerId=id;
  }
}
