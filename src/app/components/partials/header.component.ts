import { Component, Input } from '@angular/core';
//input allow to input one component to other component
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent {
  @Input() title?: string;
}
