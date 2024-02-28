import { Component, OnInit } from '@angular/core';
import { Tarif } from './interface/tarif.interface';
import { DataService } from './service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'verivox Coding Challenge FE Developmen';
  tarifList: Tarif[] = [];
  benifits: string[] = [];
  downloadSpeeds: number[] = [];
  uploadSpeeds: number[] = [];

  filterUploadSpeeds: number[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.loadData();
    this.loadDataFilters();
  }

  loadData() {
    this.dataService.getMockData().subscribe((data) => {
      this.tarifList = data;
    },
      error => console.error('Error loadData getMockData:', error)
    );
    this.dataService.getBenifits().subscribe(data => {
      this.benifits = data;
    },
      error => console.error('Error loadData getBenifits:', error)
    );
  }

  loadDataFilters() {
    this.dataService.getDownloadspeeds().subscribe((data: number[]) => {
      this.downloadSpeeds = data;
    },
      error => console.error('Error fetching download speeds:', error)
    );

    this.dataService.getUploadspeeds().subscribe((data: number[]) => {
      this.uploadSpeeds = data;
    },
      error => console.error('Error fetching download speeds:', error)
    );

  }

  applyFilters(selectedFilter: string) {
    switch(selectedFilter){
      case 'upload':
        this.tarifList = this.tarifList.sort((a:Tarif,b:Tarif)=>{
          return a.debit.upload - b.debit.upload
        });
        break;
      case 'download':
        this.tarifList = this.tarifList.sort((a:Tarif,b:Tarif)=>{
          return a.debit.download - b.debit.download
        });
        break;
      case 'price':
        this.tarifList = this.tarifList.sort((a:Tarif,b:Tarif)=>{
          return a.price - b.price
        });
        break;

    }

  }

  applyFiltersBenifits(selectedBenifit: string) {

    if (selectedBenifit !== '') {
      this.dataService.getTarifByBenifits(selectedBenifit).subscribe((sortedTarif) => {
        this.tarifList = sortedTarif;
      },
        error => {
          console.error('Error applying filter:', error);
        }
      );
    } else {
      this.loadData();
    }

  }

  applyDownloadFilter(slectedDownload: number) {
    if (slectedDownload) {
      this.dataService.getTarifByDownload(slectedDownload).subscribe((data: Tarif[]) => {
        this.tarifList = data;
      },
        error => console.log('Error applying Download filter', error)
      );
    }
  }

  applyUploadFilter(slectedUpload: number) {
    if (slectedUpload) {
      this.dataService.getTarifByUpload(slectedUpload).subscribe((data: Tarif[]) => {
        this.tarifList = data;
      },
        error => console.log('Error applying Upload filter', error)
      );
    }
  }

}
