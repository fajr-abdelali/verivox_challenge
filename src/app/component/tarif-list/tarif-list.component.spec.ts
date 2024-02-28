import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TarifListComponent } from './tarif-list.component';
import { TarifItemComponent } from './tarif-item/tarif-item.component';

describe('TarifListComponent', () => {
  let component: TarifListComponent;
  let fixture: ComponentFixture<TarifListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TarifListComponent,TarifItemComponent]
    });
    fixture = TestBed.createComponent(TarifListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
