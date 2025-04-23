import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DocumentPage } from './document.model';

@Injectable({ providedIn: 'root' })
export class DocumentService {
  getDocumentPages(docId: string): Observable<DocumentPage[]> {
    const pages = [
      {
        pageNumber: 1,
        imageUrl: 'pages/1.png',
      },
      {
        pageNumber: 2,
        imageUrl: 'pages/2.png',
      },
      {
        pageNumber: 3,
        imageUrl: 'pages/3.png',
      },
      {
        pageNumber: 4,
        imageUrl: 'pages/4.png',
      },
      {
        pageNumber: 5,
        imageUrl: 'pages/5.png',
      },
    ];
    return of(pages);
  }
}
