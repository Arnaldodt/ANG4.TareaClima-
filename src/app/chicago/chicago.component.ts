import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {
  link:string="6"
  HUM:string=""
  AVE:string=""
  HIG:string=""
  LOW:string=""
  STA:string=""

  constructor(private _httpService: HttpService) { }

  ngOnInit(): void {
    let obs = this._httpService.ejecutaApi('4887398')
    obs.subscribe({
      next:(data:any) => {
        console.log(data)
        this.HUM=data.main.humidity
        this.AVE=data.main.temp
        this.HIG=data.main.temp_max
        this.LOW=data.main.temp_min
        for (let i=0; i<data.weather.length ; i++){
          this.STA += ((this.STA === '')?'':' | ') + data.weather[i].main 
        }
      },
      error:(error) => {
          console.log("error::")
          console.log(error)
      }
    })
  }

}
