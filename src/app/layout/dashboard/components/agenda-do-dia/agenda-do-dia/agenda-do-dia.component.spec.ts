import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaDoDiaComponent } from './agenda-do-dia.component';

describe('AgendaDoDiaComponent', () => {
  let component: AgendaDoDiaComponent;
  let fixture: ComponentFixture<AgendaDoDiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendaDoDiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaDoDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
