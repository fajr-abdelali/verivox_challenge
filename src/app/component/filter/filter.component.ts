import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {

  @Input() benifits: string[] = [];
  @Input() downloads: number[] = [];
  @Input() uploads: number[] = [];
  @Output() SlectedDownload: EventEmitter<number> = new EventEmitter<number>();
  @Output() SlectedUpload: EventEmitter<number> = new EventEmitter<number>();
  @Output() filterChanged: EventEmitter<string> = new EventEmitter<string>();
  @Output() filterBenifitsChanged: EventEmitter<string> = new EventEmitter<string>();

  onFilterChange(selectedFilter: any) {
    this.filterChanged.emit(selectedFilter.value)
  }

  onFilterBenifitsChange(selectedFilter: any) {
    this.filterBenifitsChanged.emit(selectedFilter.value)
  }

  onDownloalChange(download: any) {
    this.SlectedDownload.emit(parseInt(download.value));
  }
  onUploadChange(upload: any) {
    this.SlectedUpload.emit(parseInt(upload.value));
  }

}
