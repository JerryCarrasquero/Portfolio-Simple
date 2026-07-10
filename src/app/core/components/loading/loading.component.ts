import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
@Component({
  selector: 'app-loading',
  imports: [],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.css',
})
export class Loading {
  @Input({ required: true }) src!: string | null | undefined;
  @Input() alt = '';
  @Input() imageClass = ''; 
  @Input() loading: 'lazy' | 'eager' = 'lazy';
  @Input() decoding: 'async' | 'sync' | 'auto' = 'async';

  protected isLoading = true;
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Loading component changes:', changes);
    if (changes['src']) {
      this.isLoading = true;
    }
  }
  protected onImageLoad(): void {
    console.log('Image loaded');
    this.isLoading = false;
  }
}
