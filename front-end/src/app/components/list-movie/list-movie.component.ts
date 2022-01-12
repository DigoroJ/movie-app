import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-movie',
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.css']
})
export class ListMovieComponent implements OnInit {

  movies = [{
    time: 138,
    genre: "Comedy, Drama",
    title: "Don't Look Up",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium in provident molestiae sint assumenda.",
    year: 2021,
    rate: 54
    },{
      time: 138,
      genre: "Comedy, Drama 1",
      title: "Don't Look Up 1",
      description: "1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium in provident molestiae sint assumenda.",
      year: 2021,
      rate: 54
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
