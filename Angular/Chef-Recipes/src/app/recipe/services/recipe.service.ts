import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IComment } from 'src/app/shared/interfaces/comment.model';
import { ILike } from 'src/app/shared/interfaces/like.model';
import { IRecipe } from 'src/app/shared/interfaces/recipe.model';
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeUrl:string = environment.apiUrl + "recipe/"
  commentUrl:string = environment.apiUrl + "comment/"
  likeUrl:string = environment.apiUrl + "like/"

  constructor(private http:HttpClient) { }

  createRecipe(data):Observable<any>{
    return this.http.post<any>(this.recipeUrl,data,{
      headers:new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem("token")}`)
    });
  }

  openRecipe(id:number):Observable<IRecipe>{
    return this.http.get<IRecipe>(this.recipeUrl+id)
  }

  getAllRecipes(otherParams){
    return this.http.get<IRecipe[]>(this.recipeUrl+otherParams)
  }

  getAllComments(id:number) : Observable<IComment[]>{
    return this.http.get<IComment[]>(this.commentUrl+id)
  }

  createComment(id:number,formData) : Observable<IComment[]>{
    return this.http.post<IComment[]>(this.commentUrl+id,formData,{
      headers:new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem("token")}`)
    })
  }

  likePost(id:number){
    return this.http.post<ILike>(this.likeUrl+id,{},{
      headers:new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem("token")}`)
    })
  }

  dislikePost(id:number){
    return this.http.delete<ILike>(this.likeUrl+id,{
      headers:new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem("token")}`)
    })
  }

  getAllLikes(id:number){
    return this.http.get<ILike>(this.likeUrl+id,{
      headers:new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem("token")}`)
    })
  }

}
