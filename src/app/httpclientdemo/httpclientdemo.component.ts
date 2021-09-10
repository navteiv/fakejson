import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';
import { ServerHttpService } from '../Services/server-http.service';

@Component({
  selector: 'app-httpclientdemo',
  templateUrl: './httpclientdemo.component.html',
  styleUrls: ['./httpclientdemo.component.css']
})
export class HttpclientdemoComponent implements OnInit {
  public age!: number;
  public name!: string;
  constructor(private common: CommonService, private serverHttp: ServerHttpService) {
    this.age = common.age;
  }

  ngOnInit(): void {
    this.serverHttp.getProfile().subscribe(data => {
      console.log(data);
      this.name = data.name;
      this.age = data.age;
    });
  }
  public increaseAge(){
    this.common.age++;
    this.age = this.common.age;
  }
}
