import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TarifListComponent } from './component/tarif-list/tarif-list.component';
import { TarifItemComponent } from './component/tarif-list/tarif-item/tarif-item.component';
import { FilterComponent } from './component/filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    TarifListComponent,
    TarifItemComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
