import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
    <ngx-spinner type='cog'><p style="font-size: 20px; color: white">Loading...</p></ngx-spinner>
    <router-outlet></router-outlet>
    <p-toast position="bottom-center"></p-toast>
    </div>
    `
})
export class AppComponent {
}
