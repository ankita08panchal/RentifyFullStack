import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/customer/products/products.component';
import { DemoComponent } from './components/demo/demo.component';
import { ProductDetailsComponent } from './components/customer/product-details/product-details.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';



import { AdminComponent } from './components/admin/admin/admin.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';

import { CustomersComponent } from './components/admin/customers/customers.component';
import { AddProductComponent } from './components/admin/add-product/add-product.component';

import { AdminProductsComponent } from './components/admin/admin-products/admin-products.component';

export const routers: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: DemoComponent },
    
    {path:'product-details/:id',component:ProductDetailsComponent},
    
    
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
  { path: ':lavelOne/:lavelTwo/:lavelThree', component: ProductsComponent },
    
    {path: 'admin',component:AdminComponent,children:[
      {path:"",component:DashboardComponent},
      
      {path:"products",component:AdminProductsComponent},
      {path:"customers",component:CustomersComponent},
      {path:"add-products",component:AddProductComponent}
    ]}
  //   {path: 'admin',loadChildren:()=>import("./Module/admin/admin-routing.module").then(m=>m.AdminRoutingModule)}
];
