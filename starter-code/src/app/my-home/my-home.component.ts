import { Component, OnInit } from '@angular/core';
import { ServiceMovie } from '../Movies/ServiceMovie';

@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.css']
})
export class MyHomeComponent implements OnInit {
  movies: Array<Object> = []
  constructor(private myService: ServiceMovie) { }

  ngOnInit() {
    this.movies = this.myService.getMovies();
  }

}
