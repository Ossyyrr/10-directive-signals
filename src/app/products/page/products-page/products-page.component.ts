import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CustomLabelDirective } from '../../../shared/directives/custom-label.directive';

@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, CustomLabelDirective],
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css',
})
export class ProductsPageComponent {
  constructor() {}

  private fb = inject(FormBuilder);

  public color: string = 'red';

  public myForm: FormGroup = this.fb.group({
    name: [
      '',
      [Validators.required, Validators.minLength(6), Validators.email],
    ],
  });

  changeColor() {
    this.color = '#xxxxxx'.replace(/x/g, (y) =>
      ((Math.random() * 16) | 0).toString(16)
    );
  }

  onSubmit() {}
}
