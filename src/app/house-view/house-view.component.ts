import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
// active router
import {
  ActivatedRoute,
  Router
} from '@angular/router';
import {
  HouseService
} from '../house.service';


@Component({
  selector: 'app-house-view',
  templateUrl: './house-view.component.html',
  styleUrls: ['./house-view.component.css']
})
export class HouseViewComponent implements OnInit, OnDestroy {
  public currentHouse;

  constructor(private _route: ActivatedRoute, private router: Router, public houseservice: HouseService) {
    console.log(' House-view constructoris called');
  }

  ngOnInit() {
    console.log('House-view ngOnInite is called');
    // geting the blog id from the route
    let myHouseId = this._route.snapshot.paramMap.get('houseId');
    console.log(myHouseId);
    // calling the function to get the blog with this blogid out of the overall array
    this.currentHouse = this.houseservice.getSingleBlogInformation(myHouseId)
      .subscribe((res) => {
        this.currentHouse = res.body;
      });
    console.log(this.currentHouse);
    error => {
      console.log("some error occured");
      console.log(error.errorMassage)
    }
  }

  ngOnDestroy() {
    console.log('House-view destroyed');
  }
}
