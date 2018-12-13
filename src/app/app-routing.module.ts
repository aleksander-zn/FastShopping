import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'shopping-cart', loadChildren: './shopping-cart/shopping-cart.module#ShoppingCartPageModule' },
  { path: 'scan-barcode', loadChildren: './scan-barcode/scan-barcode.module#ScanBarcodePageModule' },
  { path: 'checkout', loadChildren: './checkout/checkout.module#CheckoutPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
