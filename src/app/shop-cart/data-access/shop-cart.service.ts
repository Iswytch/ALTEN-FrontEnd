import { computed, Injectable, signal } from '@angular/core';
import { Product } from 'app/products/data-access/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public readonly cart = signal<Product[]>([]);

  public readonly cartTotalPrice = computed(() => 
    this.cart().reduce((acc, product) => acc + product.price, 0)
  );

  //Groupage des produits par occurance
  public readonly productOccurrences = computed(() => {
    // Utilisation de reduce pour compter les occurrences et stocker les produits
    const productMap = this.cart().reduce((acc, product) => {
      if (!acc[product.id]) {
        acc[product.id] = { product: product, count: 1 };  // Premier ajout du produit
      } else {
        acc[product.id].count++;  // Incrémente le compteur d'occurrences
      }
      return acc;
    }, {} as Record<number, { product: Product, count: number }>);
  
    console.log("debug :",productMap, Object.values(productMap));
    //Passage de l'objet en tableau pour itération dans template
    return Object.values(productMap);
  });

  public addToCart(product: Product) {
    this.cart.update(cart => [...cart, product]);
  }

  //Supprime tous les produits de la même catégorie
  public removeOneCatFromCart(product: Product) {
    this.cart.update(cart => cart.filter(p => p.id !== product.id));
  }

  //Supprimer 1 seul produit 
  public removeOneProdFromCart(product: Product) {
    this.cart.update(cart => {
        const cartValue = [...cart];  // Créer une copie du tableau pour ne pas le modifier directement (ne marche pas sinon)
        const index = cartValue.findIndex(p => p.id === product.id);
        if (index !== -1) {
          cartValue.splice(index, 1);
        }
        return cartValue;
    });
  }

  public getCart() {
    return this.cart();
  }

}