import { Component, OnInit } from '@angular/core';
import { RecordsService } from '../records.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-emp',
  imports: [CommonModule],
  templateUrl: './emp.component.html',
  styleUrl: './emp.component.css',
  providers: [RecordsService]
})
export class EmpComponent implements OnInit {

  infoReceived1: string[]=[];
  infoReceived2: string[]=[];
  infoReceived3: string[]=[];

  constructor(private rservice: RecordsService){}
  ngOnInit(): void {
  }
  getInfo1() {
    this.infoReceived1 = this.rservice.getInfo1();
  }
  getInfo2() {
    this.infoReceived2 = this.rservice.getInfo2();
  }  
  getInfo3() {
    this.infoReceived3 = this.rservice.getInfo3();
  }
  
}
