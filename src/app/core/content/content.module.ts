import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentRoutingModule } from './content-routing.module';
import { HttpClientModule } from  '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { QRCodeModule } from 'angularx-qrcode';
import { AfficheComponent } from './affiche/affiche.component';

// import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';




@NgModule({
  declarations: [
    AfficheComponent
  ],
  imports: [
    CommonModule,
   

    ContentRoutingModule,
    HttpClientModule,
    FormsModule,
    
    
   
  ]
})
export class ContentModule { }
