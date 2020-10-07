import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentComponent } from './payment/payment.component';
import { ShippingComponent } from './shipping/shipping.component';
import { CustomComponent } from './custom/custom.component';

const routes: Routes = [
  {path : 'pay', component : PaymentComponent},
  {path : 'ship', component : ShippingComponent},
  {path : 'custom', component : CustomComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
