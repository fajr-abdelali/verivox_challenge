import { Component, Input } from '@angular/core';
import { Tarif } from 'src/app/interface/tarif.interface';

@Component({
  selector: 'app-tarif-item',
  templateUrl: './tarif-item.component.html',
  styleUrls: ['./tarif-item.component.scss']
})
export class TarifItemComponent {
  @Input() tarifItem!:Tarif;

}
