import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavegationComponent } from './navegation/navegation.component';
import {StepperVerticalExample} from './stepper/stepper'
import { FooterComponent } from "./footer/footer.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavegationComponent, StepperVerticalExample, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'GameS';
}
