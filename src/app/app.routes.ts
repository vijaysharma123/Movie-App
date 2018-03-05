import { Routes } from '@angular/router';
import { MoviesComponent } from './component/movies/movies.component';
import {MovieComponent} from './component/movie/movie.component';
import { GenersComponent } from './component/geners/geners.component';
import { ActorComponent } from './component/actor/actor.component';

export const appRoutes: Routes = [
    {path: '', component: MoviesComponent},
    {path:'movie/:id', component:MovieComponent},
    {path: 'genres/:id/:name', component: GenersComponent},
    {path: 'actor/:id', component: ActorComponent},
   

  
];