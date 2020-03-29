import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// router moudle used for setting the application route
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { HouseComponent } from './house/house.component';
import { CharacterComponent } from './character/character.component';
import { BookViewComponent } from './book-view/book-view.component';

// import statement for service
import { BookService } from './book.service';
import { HouseViewComponent } from './house-view/house-view.component';
import { HouseService } from './house.service';
import {CharacterService} from './character.service';
import { CharacterViewComponent } from './character-view/character-view.component';

import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module




@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    HouseComponent,
    CharacterComponent,
    BookViewComponent,
    HouseViewComponent,
    CharacterViewComponent,


  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    HttpClientModule,
    RouterModule.forRoot ([
      {path: 'book', component: BookComponent},
      {path: '', redirectTo: 'book', pathMatch: 'full'},
      {path: 'book/:bookId', component: BookViewComponent},
      {path: 'house/:houseId', component: HouseViewComponent},
      {path: 'character/:characterId', component: CharacterViewComponent},
      {path: 'house', component: HouseComponent},
      {path: 'character', component: CharacterComponent}

    ]),
  ],
  providers: [BookService, HouseService, CharacterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
