import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Movie } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  movieForm = this.fb.group({
    title: [''],
    length: [''],
    description: [''],
    genre: [''],
    year: [''],
    rating: ['']
  });

  constructor(private fb: FormBuilder, private _movieService: MovieService ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    //passing the values in movie
  const movie: Movie = {
    title: this.movieForm.value.title, 
    description: this.movieForm.value.description,
    genre: this.movieForm.value.genre,
    rate: this.movieForm.value.rating,
    year: this.movieForm.value.year,
    length: this.movieForm.value.length
  }
    this._movieService.create(movie)

    .subscribe( data => console.log('working', data)
    );
   
    
  }
}
