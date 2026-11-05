import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './components/footer/footer';
import { SafeRouterLink } from '../../directives/safe-link.directive';

@Component({
  selector: 'app-public-layout',
  imports: [RouterOutlet, Footer, SafeRouterLink],
  templateUrl: './public-layout.html',
})
export class PublicLayout {}
