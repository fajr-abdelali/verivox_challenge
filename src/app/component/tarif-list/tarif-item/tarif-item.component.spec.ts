import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarifItemComponent } from './tarif-item.component';
import { Tarif } from '../../../interface/tarif.interface'

describe('TarifItemComponent', () => {
  let component: TarifItemComponent;
  let fixture: ComponentFixture<TarifItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TarifItemComponent]
    });
    fixture = TestBed.createComponent(TarifItemComponent);
    component = fixture.componentInstance;

    // Provide a mock Tarif object with the necessary properties
    const mockTarif: Tarif = {
      id: 1,
      name: 'Mock Tarif',
      debit: { download: 50, upload: 20 },
      benefit: ['Some Benefit'],
      price: 29.99,
    };

    // Set the input property
    component.tarifItem = mockTarif;


    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
