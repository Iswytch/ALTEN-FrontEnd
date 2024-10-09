import { Component } from '@angular/core';
import { Product } from 'app/products/data-access/product.model';
import { CartService } from '../data-access/shop-cart.service';
import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";
import { DataViewModule } from 'primeng/dataview';
import { DialogModule } from 'primeng/dialog';
import { PrimeIcons } from 'primeng/api';


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

  public removeOneProdFromCart(product: Product){
    this.cartService.removeOneProdFromCart(product);
  }

  public removeOneCatFromCart(product: Product){
    this.cartService.removeOneCatFromCart(product);
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
