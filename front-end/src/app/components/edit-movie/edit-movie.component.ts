import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Movie } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/services/movie.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {

  movie: Movie = {};
  id: any = 0;

  editMovieForm = this.fb.group({
    title: [''],
    length: [''],
    description: [''],
    genre: [''],
    year: [''],
    rating: ['']
  });
  
  constructor(private route: ActivatedRoute, private ms: MovieService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.populateForm();
  }

  onSubmit(){
    console.log("on submit")
  }

  populateForm(){
    this.ms.get(this.id).
    subscribe(data => {
      this.editMovieForm.patchValue({
        title: data.title,
        length: data.length,
        description: data.description,
        genre: data.genre,
        year: data.year,
        rating: data.rate
      })
    });
  }

  onUpdate(){
    console.log(this.editMovieForm.value);

    //populate the values
    const movie: Movie = {
      title: this.editMovieForm.value.title, 
      description: this.editMovieForm.value.description,
      genre: this.editMovieForm.value.genre,
      rate: this.editMovieForm.value.rating,
      year: this.editMovieForm.value.year,
      length: this.editMovieForm.value.length
    }

  this.ms.update(this.id, movie).subscribe((data) => {Swal.fire({title: "You have updated successfully."})})
  }

}
