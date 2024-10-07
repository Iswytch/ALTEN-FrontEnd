import { Routes } from "@angular/router";
import { HomeComponent } from "./shared/features/home/home.component";
import { ShopCartComponent } from "./products/features/shop-card/shop-cart.component";

export const APP_ROUTES: Routes = [
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "products",
    loadChildren: () =>
      import("./products/products.routes").then((m) => m.PRODUCTS_ROUTES)
  },
  {
    path: "shop-cart",
    component: ShopCartComponent,
  },
  { path: "", redirectTo: "home", pathMatch: "full" },
];
