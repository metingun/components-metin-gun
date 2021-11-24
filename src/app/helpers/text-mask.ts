import {Directive, ElementRef, Input, OnDestroy, OnInit} from '@angular/core';

// @ts-ignore
import * as textMask from 'vanilla-text-mask/dist/vanillaTextMask.js';

@Directive({
  selector: '[appMaskDate]'
})
export class TextMask implements OnDestroy, OnInit {
  @Input() public appMaskDate: any[] = [];

  mask = [];
  maskedInputController: { destroy: () => void; } | undefined;
  elementRef: ElementRef;

  constructor(private element: ElementRef) {
    this.elementRef = element;
  }

  ngOnDestroy() {
    if (this.maskedInputController !== undefined)
      this.maskedInputController.destroy();
  }

  ngOnInit(): void {
    this.maskedInputController = textMask.maskInput({
      inputElement: this.elementRef.nativeElement,
      mask: this.appMaskDate
    });
  }

}
