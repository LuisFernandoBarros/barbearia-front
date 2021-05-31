import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemAgendamentoComponent } from './item-agendamento.component';

describe('ItemAgendamentoComponent', () => {
  let component: ItemAgendamentoComponent;
  let fixture: ComponentFixture<ItemAgendamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemAgendamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemAgendamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
