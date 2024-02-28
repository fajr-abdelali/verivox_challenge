import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FilterComponent } from './component/filter/filter.component';
import { TarifListComponent } from './component/tarif-list/tarif-list.component';
import { TarifItemComponent } from './component/tarif-list/tarif-item/tarif-item.component';
import { Tarif } from './interface/tarif.interface'
import { DataService } from './service/data.service';



describe('AppComponent', () => {
  let service: DataService;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, FilterComponent, TarifListComponent, TarifItemComponent]
    });
    service = TestBed.inject(DataService)
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'verivox Coding Challenge FE Developmen'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('verivox Coding Challenge FE Developmen');
  });

  it('should sort tariffs by benefits', () => {
    const benefit = 'HD streaming';
    service.getTarifByBenifits(benefit).subscribe((tariffs: Tarif[]) => {
      // Add your assertions based on your expected filtering logic
    });
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.title')?.textContent).toContain('verivox Coding Challenge FE Developmen');
  });
});
