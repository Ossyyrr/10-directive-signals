import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[customLabel]',
  standalone: true,
})
export class CustomLabelDirective implements OnInit {
  private htmlElement?: ElementRef<HTMLElement>;
  private _color: string = 'red';
  private _errors?: ValidationErrors | null;

  @Input() set color(value: string) {
    console.log('Color:', value);
    this._color = value;
    this.setStyle();
  }

  @Input() set error(value: ValidationErrors | null | undefined) {
    this._errors = value;
    this.setErrorMessage();
  }

  constructor(private element: ElementRef<HTMLElement>) {
    console.log('Constructor de mi directiva customLabel');
    console.log(element);
    this.htmlElement = element;
  }
  ngOnInit(): void {
    console.log('OnInit de mi directiva customLabel');
  }

  setStyle() {
    if (!this.htmlElement) return;
    this.htmlElement.nativeElement.style.color = this._color;
  }

  setErrorMessage() {
    if (!this.htmlElement) return;
    if (!this._errors) {
      this.htmlElement.nativeElement.innerText = '';
      return;
    }
    const errors = Object.keys(this._errors);
    console.log('Errors:', errors);

    if (errors.includes('required')) {
      this.htmlElement.nativeElement.innerText = 'Este campo es requerido';
      return;
    }
    if (errors.includes('minlength')) {
      const requiredLength = this._errors['minlength'].requiredLength;
      const actualLength = this._errors['minlength'].actualLength;

      this.htmlElement.nativeElement.innerText =
        'Este campo debe tener al menos ' +
        requiredLength +
        ' caracteres, faltan   ' +
        (requiredLength - actualLength) +
        ' caracteres';
      return;
    }
    if (errors.includes('email')) {
      this.htmlElement.nativeElement.innerText = 'Este campo debe ser un email';
      return;
    }
  }
}
