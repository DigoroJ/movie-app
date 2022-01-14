import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/services/movie.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-list-movie',
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.css']
})
export class ListMovieComponent implements OnInit {

  movies: Movie[] = []
 
  constructor(private ms: MovieService) { }

  ngOnInit(): void {
   this.getMovies();
  }

  getMovies(){
    this.ms.getAll().subscribe(data => { this.movies = data})
  }
  setMovies($event:any){
     this.movies=$event;
     //window.location.reload();
  }
  deleteMovie(id: any){
   this.ms.delete(id).subscribe((data) => {

      //removing delete movie from movie array 
      this.movies = this.movies.filter((movie) => {
        return movie.id !== id;
      });

      Swal.fire({
        title: "You have deleted successfully.",
      })
    })
   
  }

}
