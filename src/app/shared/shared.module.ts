import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MatInputModule } from '@angular/material/input';
import { CardComponent } from './card/card.component';
import { RouterModule } from '@angular/router';
import { FileUploadComponent } from './file-upload/file-upload.component';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    RouterModule
  ],
  declarations: [HeaderComponent, FooterComponent, CardComponent, FileUploadComponent],
  exports: [HeaderComponent, FooterComponent, CardComponent, FileUploadComponent]
})
export class SharedModule { }
