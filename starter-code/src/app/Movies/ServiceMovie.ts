import { Injectable } from '@angular/core';
import movies from "../../sample-movies";
import * as _ from 'underscore';

interface Movie {
    id: number,
    title: string,
    poster: string,
    synopsis: string,
    genres:Array<string>,
    year: number,
    director: string,
    actors:Array<string>,
    hours:Array<string>,
    room: number
}

@Injectable()
export class ServiceMovie {
    movies:Array<Movie> = movies;
    constructor() {


    }
    getMovies(){
       return this.movies;
    }
    getMovie(id){
        return _.findWhere(this.movies, { id: id });
        // this.movies.forEach(e=>{
        //     if(e.id == id){
        //         return e;
        //     }    
        // })    
    }

}