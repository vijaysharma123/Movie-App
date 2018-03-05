import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
 import { appRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { MoviesComponent } from './component/movies/movies.component';
import { MovieCardComponent } from './component/movie-card/movie-card.component';
import { MovieComponent } from './component/movie/movie.component';
import { GenersComponent } from './component/geners/geners.component';
import { ActorComponent } from './component/actor/actor.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    // MovieComponent,
    MovieCardComponent,
    MovieComponent,
    GenersComponent,
    ActorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    JsonpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
