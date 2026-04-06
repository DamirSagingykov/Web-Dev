import { Component, input, output } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css',
})
export class ProductItemComponent {
  product = input.required<Product>();
  delete = output<number>();

  like() {
    this.product().likes += 1;
  }

  onDelete() {
    if (confirm('Delete this item?')) {
      this.delete.emit(this.product().id);
    }
  }

  shareWhatsApp() {
    const p = this.product();
    const text = `Check out this product: ${p.link}`;
    const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  }

  shareTelegram() {
    const p = this.product();
    const url =
      `https://t.me/share/url?url=${encodeURIComponent(p.link)}` +
      `&text=${encodeURIComponent(p.name)}`;
    window.open(url, '_blank');
  }
}