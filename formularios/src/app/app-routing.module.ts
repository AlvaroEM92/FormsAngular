import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './auth/pages/login-page/login-page.component';
import { RegisterPageComponent } from './auth/pages/register-page/register-page.component';
import { RegisterFormComponent } from './auth/components/register-form/register-form.component';
import { LoginFormComponent } from './auth/components/login-form/login-form.component';
import { ProductsComponent } from './auth/products/products.component';
import { verifyTokenGuard } from './auth/guards/verify-token.guard';

const routes: Routes = [
  {
    path: 'register', component: RegisterPageComponent,
    
  },
  {
    path: 'login', component: LoginPageComponent
  },
  {
    path: 'products', canActivate:[verifyTokenGuard], component: ProductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
