import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
   data='';

  constructor(private ms: MovieService) { }

  ngOnInit(): void {
  }

  search():void{
    this.ms.search(this.data).subscribe({
      next:(data)=>{
         
      },
      error:(e)=> console.error(e)
    })
  }

}
