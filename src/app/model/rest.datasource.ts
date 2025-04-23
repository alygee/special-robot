import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Annotation } from './annotation.model';

const PROTOCOL = 'http';
const PORT = 3500;

@Injectable()
export class RestDataSource {
  baseUrl: string = `http://localhost:${PORT}/`;
  auth_token?: string;

  constructor(private http: HttpClient) {}

  get annotations(): Observable<Annotation[]> {
    return this.http.get<Annotation[]>(this.baseUrl + 'annotations');
  }

  saveAnnotation(annotation: Annotation): Observable<Annotation> {
    return this.http.post<Annotation>(this.baseUrl + 'annotations', annotation);
  }

  updateAnnotation(annotation: Annotation): Observable<Annotation> {
    return this.http.put<Annotation>(
      `${this.baseUrl}annotations/${annotation.id}`,
      annotation,
    );
  }

  deleteAnnotation(id: number): Observable<Annotation> {
    return this.http.delete<Annotation>(`${this.baseUrl}annotations/${id}`);
  }
}
