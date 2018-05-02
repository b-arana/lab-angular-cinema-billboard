import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceMovie } from '../Movies/ServiceMovie';

@Component({
  selector: 'app-my-movie',
  templateUrl: './my-movie.component.html',
  styleUrls: ['./my-movie.component.css']
})
export class MyMovieComponent implements OnInit {
  movieId:number;
  movie: object; 
  constructor(private route: ActivatedRoute, private myService: ServiceMovie ) { }

  ngOnInit() {
    this.route.params
      .subscribe((params) => this.movieId = Number(params['id']));
       this.movie = this.myService.getMovie(this.movieId);
  }

}
