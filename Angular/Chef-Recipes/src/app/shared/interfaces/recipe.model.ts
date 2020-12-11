import { from } from 'rxjs';
import { IIngredient } from './ingredient.model'


export interface IRecipe{
    username: string,
    description: string,
    ingredients: IIngredient[],
}