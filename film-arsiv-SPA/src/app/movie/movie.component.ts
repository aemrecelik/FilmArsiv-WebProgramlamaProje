import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
  providers:[MovieService]
})
export class MovieComponent implements OnInit {

  constructor(private movieService:MovieService) { }
  movies:Movie[]
  ngOnInit() {
    this.movieService.getMovies().subscribe(data=> {
      this.movies=data
    })
  }

}
