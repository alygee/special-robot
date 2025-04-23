import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageRepository } from '../model/page.repository';

@Component({
  selector: 'app-document-viewer',
  imports: [],
  templateUrl: './document-viewer.component.html',
  styleUrl: './document-viewer.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocumentViewerComponent {
  page = computed(() => this.repository.page());

  constructor(
    private repository: PageRepository,
    private route: ActivatedRoute,
  ) {
    repository.getPage(route.snapshot.params['id']);
  }
}
