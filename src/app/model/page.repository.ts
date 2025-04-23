import { Injectable, signal } from '@angular/core';
import { Page } from './page.model';
import { RestDataSource } from './rest.datasource';

@Injectable({
  providedIn: 'root',
})
export class PageRepository {
  pages = signal<Page[]>([]);
  page = signal<Page | undefined>(undefined);

  constructor(private dataSource: RestDataSource) {
    this.dataSource.pages.subscribe((data) => {
      this.pages.set(data);
    });
  }

  getPage(id: number) {
    this.dataSource.pages.subscribe({
      next: (pages) => {
        const page = pages.find((a) => a.number == id);
        if (page) {
          this.page.set(new Page(page.imageUrl, page.number));
        }
        console.log(page);
        console.log(new Page());
      },
    });
  }

  savePage(page: Page) {
    console.log('todo');
  }
}
