import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent implements OnInit {
@Input() ruta:string="0"

  style1:string=""
  style2:string=""
  style3:string=""
  style4:string=""
  style5:string=""
  style6:string=""

  constructor() {}

  ngOnInit(): void {
    this.style1=""
    this.style2=""
    this.style3=""
    this.style4=""
    this.style5=""
    this.style6=""

    this.linkActivo(this.ruta)
  }
  linkActivo(id:string){
    this.style1=(id==="1")?'active':''
    this.style2=(id==="2")?'active':''
    this.style3=(id==="3")?'active':''
    this.style4=(id==="4")?'active':''
    this.style5=(id==="5")?'active':''
    this.style6=(id==="6")?'active':''
  }
}
