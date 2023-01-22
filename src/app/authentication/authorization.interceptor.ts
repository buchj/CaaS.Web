import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalstorageService } from '../shared/services/localstorage.service';


@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor {

  constructor(private ls:LocalstorageService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
    let appKey:string = this.ls.activeAppKey;
    if (appKey && appKey.length>0) {  
        const cloned = request.clone({
            headers: request.headers.set("Authorization",
                appKey)
        });
    return next.handle(cloned);
    }
    
    return next.handle(request);
}
}
