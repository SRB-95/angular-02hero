import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

// Adding an Authorization Token to Requests
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // Clone the request to add an authorization header
    const authToken = 'your-auth-token-here'; // Replace with actual token retrieval logic
    // const authToken = this.authService.getToken(); // Retrieve the token
    let authReq = request;

    // If token exists, clone the request and add the Authorization header
    if (authToken) {
      authReq = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${authToken}`),
      });
    }

    // Pass the modified request to the next handler
    return next.handle(request); // Pass the cloned request to the next handler
  }
}
