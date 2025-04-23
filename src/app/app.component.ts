import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { TuiRoot } from '@taiga-ui/core';
import { TuiHeader } from '@taiga-ui/layout';
import { TuiTitle } from '@taiga-ui/core';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, TuiRoot, TuiHeader, TuiTitle],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'test';
}
