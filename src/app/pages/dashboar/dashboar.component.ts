import { Component, OnInit } from '@angular/core';
import { PajakService } from '../../sevices/pajak.service';



@Component({
  selector: 'app-dashboar',
  templateUrl: './dashboar.component.html',
  styleUrls: ['./dashboar.component.css']
})
export class DashboarComponent {

 constructor(public pajak: PajakService) {}

  // ngOnInit(): void {
  // }

}
