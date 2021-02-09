import { Component, OnInit } from '@angular/core';
import { faEnvelope, faLock, faCode } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  faEnvelope = faEnvelope;
  faLock = faLock;
  faCode = faCode;
  errorMessage: string = "test";

  constructor() { }

  ngOnInit(): void {
  }

  onErrorMessage(){
    this.errorMessage = "Please enter a valid email and password."
  }

}
