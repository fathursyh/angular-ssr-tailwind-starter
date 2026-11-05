// typed-router-link.directive.ts
import { Directive, Input, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppRoute } from '../../app.routes';

@Directive({
  standalone: true,
  selector: 'a[safeLink]',
  hostDirectives: [RouterLink]
})
export class SafeRouterLink {
  private routerLink = inject(RouterLink);

  @Input({ required: true })
  set safeLink(route: AppRoute) {
    this.routerLink.routerLink = route;
  }
}