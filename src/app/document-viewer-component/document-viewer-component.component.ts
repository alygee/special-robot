import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-document-viewer-component',
  standalone: true,
  imports: [],
  templateUrl: './document-viewer-component.component.html',
  styleUrl: './document-viewer-component.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DocumentViewerComponentComponent {

}
