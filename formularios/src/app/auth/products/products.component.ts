import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  constructor(private authService : AuthService, private router: Router){}

  logout() {
    this.authService.logout(); // Ya no es un Observable, así que no necesitas suscribirte
    sessionStorage.removeItem('token-products'); // authService.logout() ya lo hace
    this.router.navigate(['/login']); // Redirige al login
  }

}
