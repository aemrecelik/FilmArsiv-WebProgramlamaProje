import { MovieComponent } from './movie/movie.component';
import { ValueComponent } from './value/value.component';
import { Routes } from '@angular/router';
import { MovieDetailComponent } from './movie/movie-detail/movie-detail.component';
import { MovieAddComponent } from './movie/movie-add/movie-add.component';
import { RegisterComponent } from './register/register.component';

export const appRoutes : Routes = [
    {path:"movie",component:MovieComponent},
    {path:"register",component:RegisterComponent},
    {path:"movieadd",component:MovieAddComponent},
    {path:"value",component:ValueComponent},
    {path:"movieDetail/:movieId",component:MovieDetailComponent},
    {path:"**", redirectTo: "movie", pathMatch: "full"}
];

