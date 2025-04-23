import { NgForOf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { TuiTable } from '@taiga-ui/addon-table';
import { TuiLink } from '@taiga-ui/core';
import { AnnotationRepository } from '../model/annotation.repository';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [RouterLink, NgForOf, TuiLink, TuiTable],
  providers: [AnnotationRepository],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  annotationRepository = inject(AnnotationRepository);
  annotations = computed(() => this.repository.annotations());

  constructor(private repository: AnnotationRepository) {}
}
