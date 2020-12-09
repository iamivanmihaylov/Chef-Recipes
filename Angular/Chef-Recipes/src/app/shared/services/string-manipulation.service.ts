import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringManipulationService {

  constructor() { }

  getFirstCharToUpper(input:string) : string{
    return input[0].toUpperCase()
  }
}
