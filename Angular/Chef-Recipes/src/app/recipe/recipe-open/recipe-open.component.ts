import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-open',
  templateUrl: './recipe-open.component.html',
  styleUrls: ['./recipe-open.component.css']
})
export class RecipeOpenComponent implements OnInit {

  showComments:boolean = false;
  showIngredients:boolean = true;

  constructor() { }

  ngOnInit(): void {
    this.addBottomBorder("menu-ingredients","3px","black");
  }

  showIngredientsHandler():void{
    this.addBottomBorder("menu-ingredients","3px","black");
    this.removeBottomBorder("menu-comments","3px");
    this.showIngredients = true;
    this.showComments = false;
  }

  showCommentsHandler():void{
    this.addBottomBorder("menu-comments","3px","black");
    this.removeBottomBorder("menu-ingredients","3px");
    this.showIngredients = false;
    this.showComments = true;
  }

  addBottomBorder(elementClassName:string,width:string,color:string):void{
    let element:HTMLElement = document.getElementsByClassName(elementClassName)[0] as HTMLElement;
    element.style.borderBottom = `${width} solid ${color}`
  }

  removeBottomBorder(elementClassName:string,width:string):void{
    let element:HTMLElement = document.getElementsByClassName(elementClassName)[0] as HTMLElement;
    element.style.borderBottom = `${width} solid transparent`
  }
}
