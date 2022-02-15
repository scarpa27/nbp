import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../servisi/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    error: string = "";
    login: FormGroup;

  constructor(private auth: AuthService) {

      this.login = new FormGroup({
          'id': new FormControl(null, [Validators.required]),
          'pass' : new FormControl(null, [Validators.required])
      });
  }

  ngOnInit(): void {
      this.auth.errorEmitter.subscribe(err => {
          this.error = err;
      });
  }

  log() {
      this.auth.login(this.login.value);
  }

}
