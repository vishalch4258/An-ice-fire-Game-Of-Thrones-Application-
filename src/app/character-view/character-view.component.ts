import {
  Component,
  OnInit
} from '@angular/core';
import {
  ActivatedRoute,
  Router
} from '@angular/router';
import {
  CharacterService
} from '../character.service';

@Component({
  selector: 'app-character-view',
  templateUrl: './character-view.component.html',
  styleUrls: ['./character-view.component.css']
})
export class CharacterViewComponent implements OnInit {

  public currentcharacter;


  constructor(private _route: ActivatedRoute, private router: Router, public characterService: CharacterService) {
    console.log(' character-view constructoris called');
  }

  ngOnInit() {
    console.log('character-view ngOnInite is called');
    // geting the blog id from the route
    const mycharacterId = this._route.snapshot.paramMap.get('characterId');
    console.log(mycharacterId);
    // calling the function to get the blog with this blogid out of the overall array
    this.currentcharacter = this.characterService.getSingleBlogInformation(mycharacterId)
      .subscribe((res) => {
        this.currentcharacter = res.body;
        console.log(this.currentcharacter);
         });
         error => {
          console.log("some error occured");
          console.log(error.errorMassage)
        }
      }

  ngOnDestroy() {
    console.log('character view destroyed');
  }
}
