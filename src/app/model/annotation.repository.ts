import { Injectable, signal } from '@angular/core';
import { Annotation } from './annotation.model';
import { RestDataSource } from './rest.datasource';

@Injectable({
  providedIn: 'root',
})
export class AnnotationRepository {
  annotations = signal<Annotation[]>([]);

  constructor(private dataSource: RestDataSource) {
    this.dataSource.annotations.subscribe((data) => {
      this.annotations.set(data);
    });
  }

  getAnnotation(number: number): Annotation | undefined {
    return this.annotations().find((p) => p.number == number);
  }

  saveAnnotation(annotation: Annotation) {
    if (annotation.number == null || annotation.number == 0) {
      this.dataSource.saveAnnotation(annotation).subscribe((p) => {
        // this.annotations.mutate((pdata) => pdata.push(p));
      });
    } else {
      this.dataSource.updateAnnotation(annotation).subscribe((p) => {
        // this.annotations.mutate((pdata) => {
        //   pdata.splice(
        //     pdata.findIndex((p) => p.number == annotation.number),
        //     1,
        //     annotation,
        //   );
        // });
      });
    }
  }

  deleteAnnotation(number: number) {
    this.dataSource.deleteAnnotation(number).subscribe((p) => {
      // this.annotations.mutate((pdata) => {
      //   pdata.splice(
      //     pdata.findIndex((p) => p.number == number),
      //     1,
      //   );
      // });
    });
  }
}
