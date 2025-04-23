import { Injectable, signal } from '@angular/core';
import { Annotation } from './annotation.model';
import { RestDataSource } from './rest.datasource';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AnnotationRepository {
  annotations = signal<Annotation[]>([]);
  annotation = signal<Annotation | undefined>(undefined);

  constructor(private dataSource: RestDataSource) {
    this.dataSource.annotations.subscribe((data) => {
      this.annotations.set(data);
    });
  }

  getAnnotation(id: number) {
    this.dataSource.annotations.subscribe({
      next: (annotations) => {
        const annotation = annotations.find((a) => a.number == id);
        if (annotation) {
          this.annotation.set(
            new Annotation(annotation.imageUrl, annotation.number),
          );
        }
        console.log(annotation);
        console.log(new Annotation());
      },
      error: (err: any) => console.error('Ошибка при получении аннотации', err),
    });
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
