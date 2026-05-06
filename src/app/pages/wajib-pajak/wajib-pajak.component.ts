import { Component, OnInit } from '@angular/core';
import { PajakService, WajibPajak } from '../../sevices/pajak.service';


@Component({
  selector: 'app-wajib-pajak',
  templateUrl: './wajib-pajak.component.html',
  styleUrls: ['./wajib-pajak.component.css']
})
export class WajibPajakComponent {
 list: WajibPajak[] = [];

   constructor(private pajak: PajakService) {
    this.list = this.pajak.getAll();
  }
 get totalPenghasilan() { 
  return this.pajak.getTotalPenghasilan(); }
  get totalPajak()       { 
    return this.pajak.getTotalPajak(); }
  formatRupiah(v: number) { 
    return this.pajak.formatRupiah(v); }
  hitungPajak(v: number)  { 
    return this.pajak.hitungPajak(v); }

  

}
