import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const verifyTokenGuard: CanActivateFn = (route, state) => {
      const token = sessionStorage.getItem('token-products')

      const router = inject(Router)

      if(!token){
        router.navigate(['login'])
        return false
      }

  return true;
};
