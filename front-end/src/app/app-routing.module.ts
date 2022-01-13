import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './components/add/add.component';
import { EditMovieComponent } from './components/edit-movie/edit-movie.component';
import { ListMovieComponent } from './components/list-movie/list-movie.component';


const routes: Routes = [
  {path: '', redirectTo: 'movies', pathMatch: 'full'},
  {path: 'movies',component: ListMovieComponent},
  {path: 'add', component: AddComponent},
  { path: "editmovie/:id", component: EditMovieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
