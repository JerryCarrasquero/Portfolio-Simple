import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-typewriter',
  templateUrl: './typewriter.component.html',
  styleUrl: './typewriter.component.css',
})
export class TypewriterComponent implements AfterViewInit, OnDestroy {
  @Input() text = '';
  @Input() speed = 70;
  @Input() showCursor = true;
  @Input() className = '';

  @Output() completed = new EventEmitter<void>();

  @ViewChild('typewriterTarget')
  private readonly typewriterTarget?: ElementRef<HTMLElement>;

  private instance?: { destroy: () => void };

  ngAfterViewInit(): void {
    void this.initializeTypewriter();
  }

  ngOnDestroy(): void {
    this.instance?.destroy();
  }

  private async initializeTypewriter(): Promise<void> {
    if (typeof window === 'undefined' || !this.typewriterTarget) {
      return;
    }

    const { default: TypeIt } = await import('typeit');

    this.instance = new TypeIt(this.typewriterTarget.nativeElement, {
      speed: this.speed,
      lifeLike: true,
      cursor: this.showCursor,
      waitUntilVisible: true,
    })
      .type(this.text)
      .exec(() => this.completed.emit())
      .go();
  }
}
