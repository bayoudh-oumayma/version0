import { Component, OnInit } from '@angular/core';
import { ContentM } from '../content-m';
import { ContentService } from '../content.service';

@Component({
  selector: 'app-affiche',
  templateUrl: './affiche.component.html',
  styleUrls: ['./affiche.component.scss']
})
export class AfficheComponent implements OnInit {
qrcode :ContentM={nom:"",phone:0,file:''}
  constructor(private contentServ:ContentService) { }

  ngOnInit(): void {
    // this.qrcode={nom:"",phone:0,file:''}
    
    this.affiche()

  }
  affiche(){
    
      this.contentServ.getQrCode().subscribe(data=>{this.qrcode=data[0],console.log("djkfgdsg",this.qrcode);
    this.qrcode.file
  })
  }

}
