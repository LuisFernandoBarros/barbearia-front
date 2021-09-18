import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendamentoManualComponent } from './agendamento-manual.component';

describe('AgendamentoManualComponent', () => {
  let component: AgendamentoManualComponent;
  let fixture: ComponentFixture<AgendamentoManualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendamentoManualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendamentoManualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
