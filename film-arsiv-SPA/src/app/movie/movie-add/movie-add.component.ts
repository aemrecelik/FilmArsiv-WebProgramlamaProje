import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import {FormGroup,FormControl,Validators,FormBuilder} from "@angular/forms"
import { Movie } from 'src/app/models/movie';
import { LoginUser } from 'src/app/models/loginUser';
import { AlertifyService } from 'src/app/services/alertify.service';


@Component({
  selector: 'app-movie-add',
  templateUrl: './movie-add.component.html',
  styleUrls: ['./movie-add.component.css'],
  providers:[MovieService]
})
export class MovieAddComponent implements OnInit {

  constructor(private movieService:MovieService, private formBuilder:FormBuilder, private alertifyService:AlertifyService) { }

  movie:Movie;
  movieAddForm: FormGroup;
  

  createMovieForm(){
    this.movieAddForm= this.formBuilder.group({
      name:["",Validators.required],
      description:["",Validators.required]
    })
  }



  ngOnInit() {
    
    
    this.createMovieForm();
  }

  add(){
    if(this.movieAddForm.valid){
      this.movie= Object.assign({},this.movieAddForm.value)
      this.movie.userId=1;
      this.movieService.add(this.movie);
      
}
  }
  delete(){
    
    
  }


}
