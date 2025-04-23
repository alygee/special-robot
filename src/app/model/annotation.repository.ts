import { Injectable, Signal, computed, signal } from '@angular/core';
import { Annotation } from './annotation';
import { RestDataSource } from './rest.datasource';

@Injectable()
export class AnnotationRepository {
  products = signal<Annotation[]>([]);
  categories: Signal<string[]>;

  constructor(private dataSource: RestDataSource) {
    dataSource.products.subscribe((data) => {
      this.products.set(data);
    });
    this.categories = computed(() => {
      return this.products()
        .map((p) => p.category ?? '(None)')
        .filter((c, index, array) => array.indexOf(c) == index)
        .sort();
    });
  }

  getAnnotation(id: number): Annotation | undefined {
    return this.products().find((p) => p.id == id);
  }

  saveAnnotation(product: Annotation) {
    if (product.id == null || product.id == 0) {
      this.dataSource.saveAnnotation(product).subscribe((p) => {
        // this.products.mutate((pdata) => pdata.push(p));
      });
    } else {
      this.dataSource.updateAnnotation(product).subscribe((p) => {
        // this.products.mutate((pdata) => {
        //   pdata.splice(
        //     pdata.findIndex((p) => p.id == product.id),
        //     1,
        //     product,
        //   );
        // });
      });
    }
  }

  deleteAnnotation(id: number) {
    this.dataSource.deleteAnnotation(id).subscribe((p) => {
      // this.products.mutate((pdata) => {
      //   pdata.splice(
      //     pdata.findIndex((p) => p.id == id),
      //     1,
      //   );
      // });
    });
  }
}
