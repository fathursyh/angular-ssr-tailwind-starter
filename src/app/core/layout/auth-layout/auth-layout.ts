import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SafeRouterLink } from '../../directives/safe-link.directive';

@Component({
  selector: 'app-auth-layout',
  imports: [RouterOutlet, SafeRouterLink],
  templateUrl: './auth-layout.html',
})
export class AuthLayout {}
