import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
import {
  CharacterService
} from '../character.service';
import { httpBuildQuery } from '../http-build-query';
import { tap } from 'rxjs/operators';
import { getLastPageFromHeader } from '../utils';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit, OnDestroy {

  public allcharacters;
  houseComponent: any;

  page = 0 ;
  pageSize = 5;
  totalPage = 0;

  constructor(public characterService: CharacterService) {
    console.log('chracter component constructor is called');
  }

  ngOnInit() {
    console.log('character component onInite is called');
    this.loadData();
  }

  loadData() {
    this.characterService
    .getallcharacters(httpBuildQuery(
      {page : this.page , pageSize : this.pageSize}
      ))
      .pipe(
        tap(resp => {
          this.totalPage = getLastPageFromHeader(resp) * this.pageSize;
        })
        )
      .subscribe((res: Response) => {
        // console.log(res.headers);
        this.allcharacters = res.body;
        this.allcharacters.map(item => {
          item.id = item.url.split('/').pop();
        });
      });
    // console.log(this.allcharacters);
  }

  ngOnDestroy() {
    console.log('charater compnent destroyed');
  }

  pageChanged($event){
    this.page = $event;
    this.loadData();
  }
}
