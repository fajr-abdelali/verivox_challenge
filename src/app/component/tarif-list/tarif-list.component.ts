import { Component, Input } from '@angular/core';
import { Tarif } from 'src/app/interface/tarif.interface';

@Component({
  selector: 'app-tarif-list',
  templateUrl: './tarif-list.component.html',
  styleUrls: ['./tarif-list.component.scss']
})
export class TarifListComponent {
  @Input() tarifList!:Tarif[];

}
