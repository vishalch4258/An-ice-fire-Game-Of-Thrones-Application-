import {
  Injectable
} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HouseService {

 
  public currentHouse;
  public houseApi = 'https://www.anapioficeandfire.com/api/houses';

  constructor(private http: HttpClient) {
    console.log('service cunstroctor is called');
  }

   // method  to return all the the blogs
   public getallHouses(query: any): any {
    return this.http.get(this.houseApi + '?' + query, {observe : 'response'});
  }
  // method to get a particular blog
  public getSingleBlogInformation(currentHouseId): any {
    // using a for of loop here from type script
    return this.http.get(this.houseApi + '/' + currentHouseId, {observe : 'response'});
  } // end get blog information function


}
