import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
   
   searchForm = this.fb.group({
    option: [''],
    searchValue:['']
  });
  constructor(private fb: FormBuilder, private ms: MovieService) { }
   

  ngOnInit(): void {
  }

  search():void{

    const searchData:any = {
        value: this.searchForm.value.searchValue,
        option:this.searchForm.value.option
    };

    this.ms.search(searchData).subscribe({
      next:(data)=>{
         console.log(data);
         
      },
      error:(e)=> console.error(e)
    })
  }

}
