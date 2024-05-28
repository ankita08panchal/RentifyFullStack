import { Component } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { AppState } from '../../../Models/AppState';
import { Store } from '@ngrx/store';
import { ProductService } from '../../../state/Product/product.service';

import { Observable } from 'rxjs';
import { productData } from '../../../Data/productData';
import { ProductCardComponent } from '../product-card/product-card.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { CommonModule } from '@angular/common';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, ProductCardComponent,  MatProgressBarModule, MatRadioModule, MatButtonModule, FormsModule,],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {

  selectedSize!: string;
  relatedProducts: any;
  reviews = [1, 1, 1];
  productDetails$!: Observable<any>;
  productId!: Number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<AppState>,
    private productService: ProductService,
   
  ) {
    this.relatedProducts = productData;
  }

  navigateToCart = () => {
    this.router.navigate(['/cart']);
  };

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    console.log('productId', id);

    if (id) {
      console.log('id ', id);
      this.productService.findProductById(id)
    }

    this.productDetails$ = this.store.select(
      (state) => state.product.selectedProduct
    );

    this.productDetails$.subscribe((productdata) => {
      this.productId = Number(productdata.id);
      console.log('product details from store - ', productdata.id);
    });
  }

  handleAddToCart = () => {
    const data = { size: this.selectedSize, productId: this.productId };
    console.log("data ----- ", data)
    

    this.navigateToCart();
  };

}
