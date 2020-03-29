import {
  Injectable
} from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse
} from '@angular/common/http';

@Injectable()
export class BookService {

  public allBooks = [{
      bookId: '1',
      url: 'https://www.anapioficeandfire.com/api/books/1',
      name: 'A Game of Thrones',
      isbn: '978-0553103540',
      authors: [
        'George R. R. Martin'
      ],
      numberOfPages: 694,
      publisher: 'Bantam Books',
      country: 'United States',
      mediaType: 'Hardcover',
      released: '1996-08-01T00:00:00',
      characters: 'https://www.anapioficeandfire.com/api/characters/2',

      povCharacters: 'https://www.anapioficeandfire.com/api/characters/148',

    },
    {
      bookId: '2',
      url: 'https://www.anapioficeandfire.com/api/books/2',
      name: 'A Clash of Kings',
      isbn: '978-0553108033',
      authors: 'George R. R. Martin',
      numberOfPages: 768,
      publisher: 'Bantam Books',
      country: 'United States',
      mediaType: 'Hardcover',
      released: '1999-02-02T00:00:00',
      characters: 'https://www.anapioficeandfire.com/api/characters/2',
      povCharacters: 'https://www.anapioficeandfire.com/api/characters/148',

    },
    {
      bookId: '3',
      url: 'https://www.anapioficeandfire.com/api/books/1',
      name: 'A Game of Thrones',
      isbn: '978-0553103540',
      authors: [
        'George R. R. Martin'
      ],
      numberOfPages: 694,
      publisher: 'Bantam Books',
      country: 'United States',
      mediaType: 'Hardcover',
      released: '1996-08-01T00:00:00',
      characters: 'https://www.anapioficeandfire.com/api/characters/2',

      povCharacters: 'https://www.anapioficeandfire.com/api/characters/148',

    },
    {
      bookId: '4',
      url: 'https://www.anapioficeandfire.com/api/books/2',
      name: 'A Clash of Kings',
      isbn: '978-0553108033',
      authors: 'George R. R. Martin',
      numberOfPages: 768,
      publisher: 'Bantam Books',
      country: 'United States',
      mediaType: 'Hardcover',
      released: '1999-02-02T00:00:00',
      characters: 'https://www.anapioficeandfire.com/api/characters/2',
      povCharacters: 'https://www.anapioficeandfire.com/api/characters/148',

    }

  ];

  public currentBook;
  public bookApi = 'https://www.anapioficeandfire.com/api/books';

  constructor(private http: HttpClient) {
    console.log('service cunstroctor is called');
  }

  // method  to return all the the books
  getAllBooks( query: any ): any {
    return this.http.get(this.bookApi + '?' + query, {observe: 'response'});
  }

  // method to get a particular book
  public getSingleBlogInformation(currentBookId): any {
    return this.http.get(this.bookApi + '/' + currentBookId, {observe: 'response'});
    
  } // end get book information function


}
