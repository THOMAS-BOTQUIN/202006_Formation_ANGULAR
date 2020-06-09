import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageLoginComponent } from './login/pages/page-login/page-login.component';


const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  {
    path : "orders",
    loadChildren: () => import("./orders/orders.module").then(m => m.OrdersModule)
  },
  {
    path: "clients",
    loadChildren: () => import("./clients/clients.module").then(m => m.ClientsModule)
  },
  {
    path: "**",
    loadChildren: () => import("./page-not-found/page-not-found.module").then(m => m.PageNotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
