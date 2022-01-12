import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-list-movie',
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.css']
})
export class ListMovieComponent implements OnInit {

  movies: Movie[] = []
 

  constructor(private ms: MovieService) { }

  ngOnInit(): void {
   this.ms.getAll().subscribe(data => {
     this.movies = data;
     console.log(this.movies)
   })
  }

  deleteMovie(id: any){
    console.log(id);
  }

}
