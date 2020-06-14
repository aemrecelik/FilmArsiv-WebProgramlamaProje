import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import{HttpClientModule} from '@angular/common/http'
import {RouterModule} from '@angular/router'
import {appRoutes} from './routes'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgxEditorModule} from 'ngx-editor'




// import {NgxGalleryModule} from 'ngx-gallery'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ValueComponent } from './value/value.component';
import { from } from 'rxjs';
import { NavComponent } from './nav/nav.component';
import { MovieComponent } from './movie/movie.component';
import {MovieDetailComponent} from './movie/movie-detail/movie-detail.component'
import {MovieAddComponent} from "./movie/movie-add/movie-add.component"
import {AlertifyService} from "./services/alertify.service"
import { RegisterComponent } from './register/register.component';


@NgModule({
   declarations: [
      AppComponent,
      ValueComponent,
      NavComponent,
      MovieComponent,
      MovieDetailComponent,
      MovieAddComponent,
      RegisterComponent
      
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      RouterModule.forRoot(appRoutes),
      FormsModule,
      ReactiveFormsModule,
      NgxEditorModule
      //NgxGalleryModule
     
   ],
   providers: [
      AlertifyService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
