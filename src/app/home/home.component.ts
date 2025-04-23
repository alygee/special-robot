import { AsyncPipe, NgForOf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TuiTable } from '@taiga-ui/addon-table';
import { TuiLink } from '@taiga-ui/core';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [AsyncPipe, NgForOf, RouterLink, TuiLink, TuiTable],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  protected readonly data = [
    {
      number: 1,
      imageUrl: 'pages/1.png',
    },
    {
      number: 2,
      imageUrl: 'pages/2.png',
    },
    {
      number: 3,
      imageUrl: 'pages/3.png',
    },
    {
      number: 4,
      imageUrl: 'pages/4.png',
    },
    {
      number: 5,
      imageUrl: 'pages/5.png',
    },
  ] as const;

  protected readonly columns = Object.keys(this.data[0]);
}
