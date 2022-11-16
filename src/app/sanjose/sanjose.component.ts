import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-sanjose',
  templateUrl: './sanjose.component.html',
  styleUrls: ['./sanjose.component.css']
})
export class SanjoseComponent implements OnInit {
  link:string="2"
  HUM:string=""
  AVE:string=""
  HIG:string=""
  LOW:string=""
  STA:string=""

  constructor(private _httpService: HttpService) { }

  ngOnInit(): void {
    let obs = this._httpService.ejecutaApi('5392171')
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
