import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'belajar-primengbaru';
  // items=[
    // {
    //   label:'Home',
    //   icon:'pi pi home'
    // },
    // {
    //   label:'Produk',
    //   icon:'pi pi box',
    //   items:[
    //     {label:'Laptop'},
    //     {label:'HP'}
    //   ]
    // },
    // {
    //   label:'Kontak',
    //   icon:'pi pi-envelope'
    // }
  // ];

  title = 'bdashboard';

  // items = [
  //   { label: 'Dashboar', icon: 'pi pi-home' },
  //   { label: 'Wajib Pajak' },
  //   { label: 'Laporan' }
  // ];
  // wajibPajak = [
  //   { nama: 'PT Maju Jaya', penghasilan: 10000000 },
  //   { nama: 'CV Sukses', penghasilan: 5000000 },
  //   { nama: 'Budi', penghasilan: 3000000 }
  // ];

  //  get totalWP() {
  //   return this.wajibPajak.length;
  // }

  get totalPenghasilan() {
    return this.wajibPajak.reduce((a, b) => a + b.penghasilan, 0);
  }

  hitungPajak(p: number) {
    return p * 0.1;
  }

  totalPajak() {
    return this.wajibPajak.reduce((a, b) => a + this.hitungPajak(b.penghasilan), 0);
  }

}
