import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent implements OnInit {

  @Input() width:number;
  @Input() height:number;
  @Input() text:string;

  widthPx:string;
  heightPx:string;
  paddingPx:string;
  fontPx:string;

  constructor() { }

  ngOnInit(): void {
    this.widthPx = this.width+ "px";
    this.heightPx = this.height + "px"
    this.paddingPx = (this.width - 20).toString() + "px";
    this.fontPx = (this.width - 15).toString() + "px";
  }

}
