import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { nextTick } from 'process';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IComment } from 'src/app/shared/interfaces/comment.model';
import { IRecipe } from 'src/app/shared/interfaces/recipe.model';
import { UserService } from 'src/app/user/services/user.service';
import { environment } from '../../../environments/environment'
import { RecipeService } from '../services/recipe.service';
 
@Component({
  selector: 'app-recipe-open',
  templateUrl: './recipe-open.component.html',
  styleUrls: ['./recipe-open.component.css']
})
export class RecipeOpenComponent implements AfterViewInit, OnInit {

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

  public recipe:IRecipe = null;
  public comments:IComment[] = null;
  public recipeId:number;

  @ViewChild("menuIngredient") menuIngredients: ElementRef;
  @ViewChild("menuComments") menuComments: ElementRef;
  @ViewChild("menuAddComment") menuAddComment: ElementRef;

  constructor(private renderer: Renderer2,
    private userService:UserService,
    private recipeService:RecipeService,
    private route:ActivatedRoute,
    private router:Router) { }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.addBottomBorder(this.menuIngredients);
    },1000)
  }

  ngOnInit():void{
    let paramId = this.route.snapshot.params["id"]
    this.recipeId = paramId;

    this.recipeService.openRecipe(paramId).subscribe({
      next: (data) =>{
        this.recipe = data;
      },
      error: (err) =>{
        if (err.status == 404){
          this.router.navigate(["404"])
        }
      }
    })

    this.recipeService.getAllComments(this.recipeId).subscribe(data => {
      this.comments = data
    }) 
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

  sendComment(formData){
     this.recipeService.createComment(this.recipeId,formData).subscribe(data => {
       this.comments = data;
       this.closeComment();
     })

    
  }
}
