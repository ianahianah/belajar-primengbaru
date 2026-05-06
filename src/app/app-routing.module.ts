import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboarComponent} from './pages/dashboar/dashboar.component';
import { WajibPajakComponent} from './pages/wajib-pajak/wajib-pajak.component';
import { LaporanComponent} from './pages/laporan/laporan.component';
const routes: Routes = [
  {path:'', redirectTo:'dashboard', pathMatch:'full'},
  {path:'dashboard', component:DashboarComponent},
  {path:'wajib-pajak', component:WajibPajakComponent},
  {path:'laporan', component:LaporanComponent},
  {path:'**', redirectTo:'dashboar'}, // agar jika klik localhost 4200 akan diarahkan ke /dashboar


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
