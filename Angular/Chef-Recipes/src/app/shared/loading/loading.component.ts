import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  @Input() height:string;
  @Input() width:string;
  @Input() loaderWidth:string

  constructor() { }

  ngOnInit(): void {
  }

}
