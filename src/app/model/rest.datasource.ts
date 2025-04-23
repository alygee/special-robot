import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Annotation } from './annotation.model';
import { HttpClient } from '@angular/common/http';

const PROTOCOL = 'http';
const PORT = 3500;

@Injectable({
  providedIn: 'root',
})
export class RestDataSource {
  baseUrl: string = `http://localhost:${PORT}/`;
  private http = inject(HttpClient);

  get annotations(): Observable<Annotation[]> {
    return this.http.get<Annotation[]>(this.baseUrl + 'pages');
  }

  saveAnnotation(annotation: Annotation): Observable<Annotation> {
    return this.http.post<Annotation>(this.baseUrl + 'annotations', annotation);
  }

  updateAnnotation(annotation: Annotation): Observable<Annotation> {
    return this.http.put<Annotation>(
      `${this.baseUrl}annotations/${annotation.number}`,
      annotation,
    );
  }

  deleteAnnotation(number: number): Observable<Annotation> {
    return this.http.delete<Annotation>(`${this.baseUrl}annotations/${number}`);
  }
}
