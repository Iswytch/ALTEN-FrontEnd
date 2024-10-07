import { Component } from '@angular/core';
import { Product } from 'app/products/data-access/product.model';
import { CartService } from 'app/products/data-access/shop-cart.service';
import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";
import { DataViewModule } from 'primeng/dataview';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-shop-cart',
  standalone: true,
  imports: [ButtonModule, CardModule, DataViewModule, DialogModule],
  templateUrl: './shop-cart.component.html',
  styleUrl: './shop-cart.component.css'
})
export class ShopCartComponent {

  constructor(private cartService: CartService) {}

  public addToCart(product: Product) {
    this.cartService.addToCart(product);
  }

  public removeFromCart(product: Product){
    this.cartService.removeFromCart(product);
  }

  public getCart() {
    return this.cartService.getCart();
  }

  public getCartTotalPrice() {
    return this.cartService.cartTotalPrice();
  }

  public getCartProductAndOcc() {
    return this.cartService.productOccurrences();
  }

}
