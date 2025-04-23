import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { TuiRoot } from '@taiga-ui/core';
import { TuiHeader } from '@taiga-ui/layout';
import { TuiTitle } from '@taiga-ui/core';
import { AnnotationRepository } from './model/annotation.repository';
import { RestDataSource } from './model/rest.datasource';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, TuiRoot, TuiHeader, TuiTitle],
  providers: [AnnotationRepository, RestDataSource],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'test';
}
