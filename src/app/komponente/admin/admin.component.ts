import { Component, OnInit } from '@angular/core';
import {ResponseService} from "../../servisi/response.service";
import {AuthService} from "../../servisi/auth.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {





  constructor(public ps: ResponseService, public auth: AuthService) { }

  ngOnInit(): void {


  }

}
