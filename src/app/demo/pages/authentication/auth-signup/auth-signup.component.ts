import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-signup',
  templateUrl: './auth-signup.component.html',
  styleUrls: ['./auth-signup.component.scss']
})
export class AuthSignupComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  
}
