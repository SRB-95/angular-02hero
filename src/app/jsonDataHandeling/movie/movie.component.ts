import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

// Services
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  // Public members
  public movies: any[] = [];

  // Private members
  private readonly subscription: Subscription = new Subscription();

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getMovieList()
  }

  /**
   * getMovieList method is to fetch movie details
   */
  private getMovieList() {
    this.subscription.add(this.movieService.getMovies()
      .subscribe({
        next: (res) => {
          this.movies = res;
          console.log('Movies fetched successfully:', res);
        },
        error: (error: HttpErrorResponse) => {
          console.log('<MovieComponent> - <getMovieList> : Error occurred while fetching movies...', error);
        },
        complete: () => {
          console.log('Movies fetch completed!');
        }
      })
    );
  }

  /**
   * A callback method that performs custom clean-up, invoked immediately before an instance is destroyed. 
   */
  ngOnDestroy(): void {
    // Clean up the subscription
    this.subscription.unsubscribe();
  }
}