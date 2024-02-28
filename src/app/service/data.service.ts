import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Tarif } from '../interface/tarif.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  mockData: Tarif[] = [
    {
      id: 1,
      name: "Premium Package",
      benefit: ["Unlimited data", "HD streaming", "24/7 customer support"],
      price: 65.99,
      debit: {
        download: 90,
        upload: 30
      }
    },
    {
      id: 2,
      name: "Premium Package",
      benefit: ["limited data", "HD streaming", "12/7 customer support"],
      price: 50.99,
      debit: {
        download: 200,
        upload: 25
      }
    },
    {
      id: 3,
      name: "Premium Package",
      benefit: ["limited data", "streaming", "12/7 customer support"],
      price: 20.99,
      debit: {
        download: 60,
        upload: 10
      }
    },
    {
      id: 4,
      name: "Premium Package",
      benefit: ["Unlimited data", "24/7 customer support"],
      price: 40.99,
      debit: {
        download: 110,
        upload: 50
      }
    },
    {
      id: 5,
      name: "Premium Package",
      benefit: ["HD streaming", "24/7 customer support"],
      price: 80,
      debit: {
        download: 230,
        upload: 70
      }
    },
    {
      id: 6,
      name: "Premium Package",
      benefit: ["Unlimited data", "HD streaming"],
      price: 45.99,
      debit: {
        download: 160,
        upload: 100
      }
    },
    {
      id: 7,
      name: "Premium Package",
      benefit: ["24/7 customer support"],
      price: 49.99,
      debit: {
        download: 100,
        upload: 20
      }
    },
  ];

  constructor() { }

  getMockData(): Observable<Tarif[]> {
    return of(this.mockData);
  }

  getBenifits(): Observable<string[]> {
    const allBenefits = this.mockData.flatMap(tarif => tarif.benefit);
    return of([... new Set(allBenefits)]);
  }

  getDownloadspeeds(): Observable<number[]> {
    const allDownloadsSpeeds = this.mockData.map(tarif => tarif.debit.download);
    return of([... new Set(allDownloadsSpeeds)]);
  }

  getUploadspeeds(): Observable<number[]> {
    const allDownloadsSpeeds = this.mockData.map(tarif => tarif.debit.upload);
    return of([... new Set(allDownloadsSpeeds)]);
  }

  getTarifByBenifits(benifit: string): Observable<Tarif[]> {
    const sortedData = this.mockData.filter(tarif => {
      return tarif.benefit.includes(benifit);
    });
    return of(sortedData);
  }

  getTarifByDownload(slectedDownload: number): Observable<Tarif[]> {
    const tarif = this.mockData.filter(tarif => tarif.debit.download == slectedDownload)
    return of(tarif);
  }

  getTarifByUpload(slectedUpload: number): Observable<Tarif[]> {
    const tarif = this.mockData.filter(tarif => tarif.debit.upload == slectedUpload)
    return of(tarif);
  }

}
