import { Component, OnInit } from '@angular/core';
// import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';
import { bufferCount } from 'rxjs';
import { ContentM } from './content-m';
import { ContentService } from './content.service';
// import jsPDF from 'jspdf';
// import html2canvas from 'html2canvas'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
Qr:ContentM={nom:'',phone:0,file:''};
// public myAngularxQrCode!: string ;
qrcode!:ContentM
  constructor(private contentServ:ContentService) { 
    // this.myAngularxQrCode = '';
  }

  ngOnInit(): void {
    

  }
  submit(){
    console.log("or",this.Qr);
    
    this.contentServ.createQrCode(this.Qr).subscribe(data=>{console.log("data",data);
    })
    
  }
  // elementType= NgxQrcodeElementTypes.URL
  // correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH
  // value = ''

  // public openPDF(): void {
  //   let DATA: any = document.getElementById('htmlData');
  //   html2canvas(DATA).then((canvas) => {
  //     let fileWidth = 501;
  //     let fileHeight = (canvas.height * fileWidth) / canvas.width;
  //     const FILEURI = canvas.toDataURL('image/png');
  //     let PDF = new jsPDF('p', 'mm', 'a6');
  //     let position = 50;
  //     PDF.addImage(FILEURI, 'PNG', 35, position, fileWidth, fileHeight);
  //     PDF.save('Qr-Code.pdf');
  //   });
  // }
  affiche(){
   return this.contentServ.getQrCode().subscribe(data=>this.qrcode=data)
  }

}

