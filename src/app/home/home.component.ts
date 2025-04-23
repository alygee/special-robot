import { NgForOf } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { TuiTable } from '@taiga-ui/addon-table';
import { TuiLink } from '@taiga-ui/core';
import { PageRepository } from '../model/page.repository';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [RouterLink, NgForOf, TuiLink, TuiTable],
  providers: [PageRepository],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  pages = computed(() => this.repository.pages());

  constructor(private repository: PageRepository) {}
}
