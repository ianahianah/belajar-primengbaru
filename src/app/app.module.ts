import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { DashboarComponent } from './pages/dashboar/dashboar.component';
import { WajibPajakComponent } from './pages/wajib-pajak/wajib-pajak.component';
import { LaporanComponent } from './pages/laporan/laporan.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboarComponent,
    WajibPajakComponent,
    LaporanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    CardModule,
    MenubarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
