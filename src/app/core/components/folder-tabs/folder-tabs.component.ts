import {
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';

export interface FolderTabItem {
  id?: string;
  title: string;
  summary?: string;
}

export interface FolderTabTemplateContext {
  $implicit: FolderTabItem;
  tab: FolderTabItem;
  index: number;
}

@Component({
  selector: 'app-folder-tabs',
  imports: [NgTemplateOutlet],
  templateUrl: './folder-tabs.component.html',
  styleUrl: './folder-tabs.component.css',
})
export class FolderTabsComponent {

  @Input() tabs: ReadonlyArray<FolderTabItem> = [];
  @Input() panelLabel = 'Folder tabs';

  @Input()
  set selectedIndex(value: number) {
    this.activeIndex = this.normalizeIndex(value);
  }

  get selectedIndex(): number {
    return this.activeIndex;
  }

  @Output() readonly selectedIndexChange = new EventEmitter<number>();
  @Output() readonly tabChange = new EventEmitter<FolderTabItem>();

  @ContentChild(TemplateRef, { descendants: false })
  protected readonly tabContentTemplate?: TemplateRef<FolderTabTemplateContext>;

  @ViewChild('stripScroller')
  private readonly stripScroller?: ElementRef<HTMLDivElement>;

  protected activeIndex = 0;
  protected panelHeight = '32rem';

  protected get activeTab(): FolderTabItem | undefined {
    return this.tabs[this.activeIndex];
  }

  protected selectTab(index: number): void {
    const normalizedIndex = this.normalizeIndex(index);

    if (normalizedIndex === this.activeIndex) {
      return;
    }

    this.activeIndex = normalizedIndex;
    this.selectedIndexChange.emit(this.activeIndex);

    const currentTab = this.tabs[this.activeIndex];

    if (currentTab) {
      this.tabChange.emit(currentTab);
    }
  }

  protected scrollTabs(direction: 'left' | 'right'): void {
    const scroller = this.stripScroller?.nativeElement;

    if (!scroller) {
      return;
    }

    const distance = Math.max(240, Math.round(scroller.clientWidth * 0.72));
    const delta = direction === 'left' ? -distance : distance;

    scroller.scrollBy({ left: delta, behavior: 'smooth' });
  }

  protected trackTab(index: number, tab: FolderTabItem): string {
    return tab.id ?? `${tab.title}-${index}`;
  }

  private normalizeIndex(index: number): number {
    if (!this.tabs.length) {
      return 0;
    }

    if (!Number.isFinite(index)) {
      return 0;
    }

    return Math.min(Math.max(Math.trunc(index), 0), this.tabs.length - 1);
  }
}
