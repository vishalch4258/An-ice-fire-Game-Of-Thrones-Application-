import {
  Injectable
} from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  
  public currentcharacter;
  public characterApi = 'https://www.anapioficeandfire.com/api/characters';


  constructor(private http: HttpClient) {
    console.log('service cunstroctor is called');
  }

  // method  to return all the the blogs
  public getallcharacters(query: any): any {
    return this.http.get(this.characterApi + '?' + query, {observe: 'response'});
  }

  // method to get a particular blog
  public getSingleBlogInformation(currentcharacterId): any {
    // using a for of loop here from type script
    return this.http.get(this.characterApi + '/' + currentcharacterId, {observe: 'response'});
  } // end get blog information function
}
