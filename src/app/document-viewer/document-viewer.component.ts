import {
  ChangeDetectionStrategy,
  Component,
  ChangeDetectorRef,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnnotationComponent } from '../annotation/annotation.component';
import { NgFor } from '@angular/common';
import { Annotation } from '../model/annotation.model';
import { DocumentPage } from '../model/document.model';
import { DocumentService } from '../model/document.service';

@Component({
  selector: 'app-document-viewer',
  imports: [NgFor, AnnotationComponent],
  templateUrl: './document-viewer.component.html',
  styleUrl: './document-viewer.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocumentViewerComponent {
  pages: DocumentPage[] = [];
  documentName = '';
  zoom = 1;
  annotations: Annotation[] = [];

  constructor(
    private docService: DocumentService,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef,
  ) {
    const docId = this.route.snapshot.paramMap.get('id') || '1';
    this.docService.getDocumentPages(docId).subscribe((p) => (this.pages = p));
  }

  zoomIn(): void {
    this.zoom += 0.1;
  }

  zoomOut(): void {
    this.zoom = Math.max(0.1, this.zoom - 0.1);
  }

  addAnnotation(type: 'text' | 'image', imageData?: string) {
    const newAnno: Annotation = {
      id: String(Math.floor(Math.random() * 1000)),
      type,
      content: type === 'text' ? 'New note' : imageData || 'assets/image.png',
      x: 150,
      y: 150,
    };
    this.annotations.push(newAnno);
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        this.addAnnotation('image', reader.result as string);
        this.cdr.detectChanges();
      };
      reader.readAsDataURL(input.files[0]);
    }
  }

  updatePosition(id: string, x: number, y: number) {
    const annotation = this.annotations.find((a) => a.id === id);
    if (annotation) {
      annotation.x = x;
      annotation.y = y;
    }
  }

  updateContent(id: string, content: string) {
    const annotation = this.annotations.find((a) => a.id === id);
    if (annotation && annotation.type === 'text') {
      annotation.content = content;
    }
  }

  removeAnnotation(id: string) {
    this.annotations = this.annotations.filter((a) => a.id !== id);
  }

  save() {
    console.log(this.annotations);
  }
}
