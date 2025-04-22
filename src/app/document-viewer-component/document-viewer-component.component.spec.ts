import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentViewerComponentComponent } from './document-viewer-component.component';

describe('DocumentViewerComponentComponent', () => {
  let component: DocumentViewerComponentComponent;
  let fixture: ComponentFixture<DocumentViewerComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumentViewerComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentViewerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
