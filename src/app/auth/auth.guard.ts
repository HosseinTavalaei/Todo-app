import { Injectable, inject } from '@angular/core';
import { CanMatchFn, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

// @Injectable({
//   providedIn: 'root'
// })
export const AuthGuard: CanMatchFn =()=>{
  const authService = inject(AuthService)
  const router = inject(Router)

  if(!authService.getUserStatus()){
    router.navigateByUrl('/auth')

    return false
  }else { return true}



}


// export const AuthGuard: CanMatchFn = () => {
//   const authService = inject (AuthService)
//   const router = inject(Router)
//   if(!authService.getUserStatus()){
//     router.navigateByUrl('/auth')
//     return false
//   }else{
//     return true; 
//   }
// }
