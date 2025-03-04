import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrngComponent } from './grng.component';

describe('GrngComponent', () => {
  let component: GrngComponent;
  let fixture: ComponentFixture<GrngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrngComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
