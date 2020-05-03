import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/** Importing Components */
import { AppComponent } from './app.component';
import { MainComponent } from './main.component';

/**
 * Importing Modules
 */
import { AppRoutingModule } from './/app-routing.module';
import { FeatureModule } from './feature/feature.module';
import { SharedModule } from './shared/shared.module';

/** Import Services */
import { TokenInterceptor } from './provider/http-interceptor.service';

/** Third Party Module */
import { NgxSpinnerModule } from 'ngx-spinner';
import {ToastModule} from 'primeng/toast';
import {MessageService} from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FeatureModule,
    SharedModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    ToastModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
