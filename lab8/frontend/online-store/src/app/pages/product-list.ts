import { Component, input, output } from '@angular/core';
import { Product } from './../models/product.model';
import { ProductItemComponent } from './product-item/product-item';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductItemComponent],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductListComponent {
  products = input.required<Product[]>();
  remove = output<number>();

  onDelete(id: number) {
    this.remove.emit(id);
  }
}