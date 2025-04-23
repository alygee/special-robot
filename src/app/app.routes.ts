import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DocumentViewerComponent } from './document-viewer/document-viewer.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'annotation/:id', component: DocumentViewerComponent },
  { path: '**', redirectTo: '/home' },
];
