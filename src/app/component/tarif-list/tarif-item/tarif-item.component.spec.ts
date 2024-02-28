import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarifItemComponent } from './tarif-item.component';

describe('TarifItemComponent', () => {
  let component: TarifItemComponent;
  let fixture: ComponentFixture<TarifItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TarifItemComponent]
    });
    fixture = TestBed.createComponent(TarifItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
