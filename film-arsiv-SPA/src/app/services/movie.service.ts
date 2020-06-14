import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';
import { Photo } from '../models/photo';
import { AlertifyService } from 'src/app/services/alertify.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

constructor(private httpClient:HttpClient,private alertifyService:AlertifyService, private router:Router) { }
path ="https://localhost:44382/api/";
getMovies():Observable<Movie[]>{
  return this.httpClient.get<Movie[]>(this.path+"movies");
}
  getMovieById(movieId):Observable<Movie>{
    return this.httpClient.get<Movie>(this.path+"movies/detail/?id="+movieId)
  }

  getPhotosById(movieId):Observable<Photo[]>{
    return this.httpClient.get<Photo[]>(this.path+"movies/photos/?movieId="+movieId)
  }

  add(movie){
    this.httpClient.post(this.path + 'movies/add', movie).subscribe(data=> {
      this.alertifyService.success("Film Başarıyla Eklendi")
      this.router.navigateByUrl('/movieDetail/' + data["id"])
    });
  }

}
