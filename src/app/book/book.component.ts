import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
import {
  BookService
} from '../book.service';
import { httpBuildQuery } from '../http-build-query';
import { tap } from 'rxjs/operators';
import { getLastPageFromHeader } from '../utils';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']

})
export class BookComponent implements OnInit, OnDestroy {

  public allBooks;
  bookcompnent: any;

  page = 1;
  pageSize = 5;
  totalPage = 0;

  constructor(public bookService: BookService) {
    console.log('Book component constructor is called');
  }

  ngOnInit() {
    console.log('Book component ngOnInite is called');
    this.loadData();
  }

  loadData() {
    this.bookService.getAllBooks(httpBuildQuery({page: this.page, pageSize : this.pageSize}) )
    .pipe(
      tap(resp => {
        this.totalPage = getLastPageFromHeader(resp) * this.pageSize;
        // console.log(this.totalPage);
      }))
    .subscribe((res: Response) => {
      // console.log(res.headers);
      this.allBooks = res.body;
      this.allBooks.map(item => {
        item.id = item.url.split('/').pop();
      });
    });
  error => {
    console.log("some error occured");
    console.log(error.errorMassage)
  }
  }

  pageChanged($event) {
    this.page = $event;
    this.loadData();
  }

  ngOnDestroy() {
    console.log('Book component destroyed');
  }
}
