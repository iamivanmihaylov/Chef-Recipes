import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { UserService } from 'src/app/user/services/user.service';
import { environment } from '../../../environments/environment'
 
@Component({
  selector: 'app-recipe-open',
  templateUrl: './recipe-open.component.html',
  styleUrls: ['./recipe-open.component.css']
})
export class RecipeOpenComponent implements AfterViewInit {

  showComments:boolean = false;
  showIngredients:boolean = true;
  showAddComment:boolean = false;

  tinyMceKey:string = environment.tinyMceApiKey;

  tinyMceSettings:Object = {
    plugins:'emoticons',
    toolbar:'emoticons',
    toolbar_location:'bottom',
    menubar: false,
    resize: false
  }

  isLiked:boolean = false;

  get isAuthenticated(){
    return this.userService.isAuthenticated();
  }

  @ViewChild("menuIngredients") menuIngredients: ElementRef;
  @ViewChild("menuComments") menuComments: ElementRef;
  @ViewChild("menuAddComment") menuAddComment: ElementRef;

  constructor(private renderer: Renderer2,private userService:UserService) { }

  ngAfterViewInit(): void {
    this.addBottomBorder(this.menuIngredients);
  }

  showIngredientsHandler():void{
    this.addBottomBorder(this.menuIngredients);
    this.removeBottomBorder(this.menuComments);
    this.showIngredients = true;
    this.showComments = false;
  }

  showCommentsHandler():void{
    this.addBottomBorder(this.menuComments);
    this.removeBottomBorder(this.menuIngredients);
    this.showIngredients = false;
    this.showComments = true;
  }

  addBottomBorder(element:ElementRef):void{
    this.renderer.setStyle(
      element.nativeElement,
      'border-bottom',
      '3px solid black'
    )
  }

  removeBottomBorder(element:ElementRef):void{
    this.renderer.setStyle(
      element.nativeElement,
      'border-bottom',
      '3px solid transparent'
    )
  }

  likeHandler(){
    this.isLiked = !this.isLiked;
  }

  toggleAddComment(){
    this.showAddComment = !this.showAddComment;
  }

  closeComment(){
    this.showAddComment = false;
  }
}
