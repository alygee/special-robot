import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from './page.model';
import { HttpClient } from '@angular/common/http';

const PROTOCOL = 'http';
const PORT = 3500;

@Injectable({
  providedIn: 'root',
})
export class RestDataSource {
  baseUrl: string = `http://localhost:${PORT}/`;
  private http = inject(HttpClient);

  get pages(): Observable<Page[]> {
    return this.http.get<Page[]>(this.baseUrl + 'pages');
  }

  savePage(page: Page) {
    console.log('todo');
  }
}
