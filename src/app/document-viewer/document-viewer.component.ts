import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnnotationRepository } from '../model/annotation.repository';
import { Annotation } from '../model/annotation.model';

@Component({
  selector: 'app-document-viewer',
  imports: [],
  templateUrl: './document-viewer.component.html',
  styleUrl: './document-viewer.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocumentViewerComponent {
  annotation = computed(() => this.repository.annotation());

  constructor(
    private repository: AnnotationRepository,
    private route: ActivatedRoute,
  ) {
    repository.getAnnotation(route.snapshot.params['id']);
  }

  ngOnInit(): void {
    // this.repository.getAnnotation(this.annotationId).subscribe({
    //   next: (annotation) => (this.annotation = annotation),
    //   error: (err) => console.error('Ошибка при получении аннотации', err),
    // });
  }
}
