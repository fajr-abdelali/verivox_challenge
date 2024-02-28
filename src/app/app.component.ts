import { Component, OnInit } from '@angular/core';
import { Tarif } from './interface/tarif.interface';
import { DataService } from './service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'verivox_challenge';
  tarifList: Tarif[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.dataService.getMockData().subscribe((data) => {
      this.tarifList = data;
    },
      error => console.error('Error loadData getMockData:', error)
    );
  }

}
