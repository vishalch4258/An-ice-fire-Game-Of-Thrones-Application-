import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
// activare route
import {
  ActivatedRoute,
  Router
} from '@angular/router';
import {
  BookService
} from '../book.service';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.css']
})
export class BookViewComponent implements OnInit, OnDestroy {
  public currentBook;

  constructor(private route: ActivatedRoute, private router: Router, public bookservice: BookService) {
    console.log(' book-view constructor is called');
  }

  ngOnInit() {
    console.log('book-view ngOnInit Called');
    // geting the blog id from the route
    const myBookId = this.route.snapshot.paramMap.get('bookId');
    console.log(myBookId);
    // calling the function to get the blog with this blogid out of the overall array
    this.currentBook = this.bookservice.getSingleBlogInformation(myBookId)
      .subscribe((res) => {
        this.currentBook = res.body;
      });
    console.log(this.currentBook);
    error => {
      console.log("some error occured");
      console.log(error.errorMassage)
    }
  }

  ngOnDestroy() {
    console.log('book-view destroyed');
  }
}
