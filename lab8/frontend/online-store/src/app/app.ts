import { Component } from '@angular/core';
import { ProductService } from './services/product';
import { Category } from './models/category.model';
import { Product } from './models/product.model';
import { ProductListComponent } from './pages/product-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  categories: Category[] = [];
  allProducts: Product[] = [];

  selectedCategoryId: number | null = null;

  constructor(private productService: ProductService) {
    this.categories = this.productService.getCategories();
    this.allProducts = this.productService.getAllProducts();
  }

  selectCategory(categoryId: number) {
    this.selectedCategoryId = categoryId;
  }

  get selectedProducts(): Product[] {
    if (this.selectedCategoryId === null) return [];
    return this.allProducts.filter(p => p.categoryId === this.selectedCategoryId);
  }

  removeProduct(productId: number) {
   
    this.allProducts = this.allProducts.filter(p => p.id !== productId);
  }
}