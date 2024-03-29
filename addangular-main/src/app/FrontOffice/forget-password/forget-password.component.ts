import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationRequest } from '../models/authentication-request';
import { AuthenticationResponse } from '../models/authentication-response';
import { AuthenticationService } from 'src/app/serives/authentication.service';
import { VerificationRequest } from '../models/verification-request';
import { UserAuthServiceService } from 'src/app/serives/auth/user-auth-service.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent {

}
