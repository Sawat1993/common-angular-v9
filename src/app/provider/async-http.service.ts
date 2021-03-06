import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap, finalize } from 'rxjs/operators';
import { Router } from '@angular/router';

import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class AsyncHttpService {

  constructor(private httpClient: HttpClient, private spinner: NgxSpinnerService,
              private messageService: MessageService, private router: Router) { }

  get(url: string, options?: object): Observable<any> {
    this.spinner.show();
    return this.httpClient.get(url, options)
      .pipe(
        catchError(this.handleError(url))
      ).pipe(
        finalize(() => {
          this.spinner.hide();
        })
      );
  }

  post(url: string, data: object, options?: object): Observable<any> {
    this.spinner.show();
    return this.httpClient.post(url, data, options)
      .pipe(
        catchError(this.handleError(url))
      ).pipe(
        finalize(() => {
          this.spinner.hide();
        })
      );
  }

  put(url: string, data: object, options?: object): Observable<any> {
    this.spinner.show();
    return this.httpClient.put(url, data, options)
      .pipe(
        catchError(this.handleError(url))
      ).pipe(
        finalize(() => {
          this.spinner.hide();
        })
      );
  }

  delete(url: string, options?: object): Observable<any> {
    this.spinner.show();
    return this.httpClient.delete(url, options)
      .pipe(
        catchError(this.handleError(url))
      ).pipe(
        finalize(() => {
          this.spinner.hide();
        })
      );
  }

  private handleError<T>(url = 'url', result?: T) {
    return (error: any): Observable<T> => {
      if (error.status === 401) {
        this.tokenExpired();
      }
      this.errorToast();
      return of(result);
    };
  }

  errorToast() {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Please try again' });
  }

  tokenExpired() {
    this.router.navigate(['login']);
  }
}
