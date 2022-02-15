import {Injectable} from '@angular/core';
import {AuthService} from "./auth.service";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class InterceptService implements HttpInterceptor {

    constructor(private auth: AuthService) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this.auth.getToken();

        if (!token || InterceptService.tokenExpired(token)) {
            this.auth.logout();
            return next.handle(request);
        }

        return next.handle(request.clone({
            params: request.params.set('token', token)
        }));
    }

    private static tokenExpired(token: string) {
        const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
        return (Math.floor((new Date).getTime() / 1000)) >= expiry;
    }


}
