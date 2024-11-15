import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiblingsComponentComponent } from './siblings-component.component';

describe('SiblingsComponentComponent', () => {
  let component: SiblingsComponentComponent;
  let fixture: ComponentFixture<SiblingsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiblingsComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiblingsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
