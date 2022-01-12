import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
<<<<<<< HEAD
import { ListMovieComponent } from './components/list-movie/list-movie.component';

=======
import { SearchComponent } from './components/search/search.component';
>>>>>>> 2460e423a1142ef5bed24f8d43a99de242d65576
=======
import { AddComponent } from './components/add/add.component';
>>>>>>> b1870679082b3199c356b95ed260dd9aacde6a61

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
<<<<<<< HEAD
    ListMovieComponent
=======
    SearchComponent
>>>>>>> 2460e423a1142ef5bed24f8d43a99de242d65576
=======
    AddComponent
>>>>>>> b1870679082b3199c356b95ed260dd9aacde6a61
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
