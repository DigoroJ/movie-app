import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { ListMovieComponent } from './components/list-movie/list-movie.component';

=======
import { SearchComponent } from './components/search/search.component';
>>>>>>> 2460e423a1142ef5bed24f8d43a99de242d65576

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    ListMovieComponent
=======
    SearchComponent
>>>>>>> 2460e423a1142ef5bed24f8d43a99de242d65576
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
