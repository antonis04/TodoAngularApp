import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Welcome } from "./welcome/welcome";
import { Login } from './login/login';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Welcome, Login, FormsModule],
  templateUrl: './app.html',
  standalone: true,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('TodoAngularApp');
  protected readonly message = signal('This is your TodoAngularApp application!');
}
