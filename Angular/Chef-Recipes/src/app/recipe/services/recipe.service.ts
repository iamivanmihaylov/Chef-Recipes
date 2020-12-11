import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRecipe } from 'src/app/shared/interfaces/recipe.model';
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeUrl:string = environment.apiUrl + "recipe/"

  constructor(private http:HttpClient) { }

  createRecipe(data):Observable<any>{
    return this.http.post<any>(this.recipeUrl,data,{
      headers:new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem("token")}`)
    });
  }

  openRecipe(id:number):Observable<IRecipe>{
    return this.http.get<IRecipe>(this.recipeUrl+id)
  }
}
