import {
  Component,
  Input,
  Output,
  EventEmitter,
  HostListener,
} from '@angular/core';
import { Annotation } from '../model/annotation.model';
import { NgIf } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-annotation',
  templateUrl: './annotation.component.html',
  styleUrls: ['./annotation.component.css'],
  imports: [NgIf],
})
export class AnnotationComponent {
  @Input() annotation!: Annotation;
  @Output() remove = new EventEmitter<void>();
  @Output() dragged = new EventEmitter<{ x: number; y: number }>();
  @Output() contentChange = new EventEmitter<string>();

  private isDragging = false;
  private offsetX = 0;
  private offsetY = 0;

  startDrag(event: MouseEvent) {
    this.isDragging = true;
    this.offsetX = event.offsetX;
    this.offsetY = event.offsetY;
  }

  @HostListener('document:mouseup')
  stopDrag() {
    this.isDragging = false;
  }

  @HostListener('document:mousemove', ['$event'])
  onDrag(event: MouseEvent) {
    if (this.isDragging) {
      this.dragged.emit({
        x: event.clientX - this.offsetX,
        y: event.clientY - this.offsetY,
      });
    }
  }

  onContentChange(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.contentChange.emit(value);
  }
}
