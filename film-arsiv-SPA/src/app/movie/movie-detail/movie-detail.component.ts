import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/models/movie';
// import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';


@Component({
  selector: 'app-movie-detail',
  templateUrl:'./movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
  providers:[MovieService]
})
export class MovieDetailComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute, private movieService:MovieService) { }
  movie:Movie;
 
  // galleryOptions: NgxGalleryOptions[];
  // galleryImages: NgxGalleryImage[];

  ngOnInit() {
    
    


    this.activatedRoute.params.subscribe(params=> {
      this.getMovieById(params["movieId"])
    })
  }
  getMovieById(movieId) {
    this.movieService.getMovieById(movieId).subscribe(data=> {
        this.movie=data;
    })
  }


  // getPhotosByMovie(movieId){
  //   this.movieService.getPhotosById(movieId).subscribe(data=> {
  //     this.photos = data;
  //     this.setGallery();
  //   })
  // }


  // getImages(){
  //   const imageUrls=[]
  //   for(let i = 0; i < this.movie.photos.length; i++){
  //       imageUrls.push({
  //         small:this.movie.photos[i].url,
  //         medium:this.movie.photos[i].url,
  //         big:this.movie.photos[i].url
  //       })
  //   }
  //   return imageUrls;
  // }

  // setGallery(){
  //   this.galleryOptions = [
  //     {
  //         width: '600px',
  //         height: '400px',
  //         thumbnailsColumns: 4,
  //         imageAnimation: NgxGalleryAnimation.Slide
  //     },
  //     // max-width 800
  //     {
  //         breakpoint: 800,
  //         width: '100%',
  //         height: '600px',
  //         imagePercent: 80,
  //         thumbnailsPercent: 20,
  //         thumbnailsMargin: 20,
  //         thumbnailMargin: 20
  //     },
  //     // max-width 400
  //     {
  //         breakpoint: 400,
  //         preview: false
  //     }
  // ];

  // this.galleryImages = this.getImages()
  // }




}
