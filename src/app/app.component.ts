import { Component, OnInit } from '@angular/core';
import data from '../app/data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'hotel-rating';
  area: string;
  category;
  image;
  name: string;
  city: string;
  rating: { rating: number; votes: number }[];
  four: number;
  five: number;
  three: number;
  two: number;
  one: number;
  featureRating: {
    place: number;
    food: number;
    service: number;
    staff: number;
    breakfast: number;
  };

  ngOnInit() {
    this.function();
  }

  function(): void {
    this.area = data.area;
    this.category = data.category;
    this.image = data['cover-image'];
    this.name = data.name;
    this.city = data.city;
    this.rating = data.review_rating.votes;
    this.four = (this.rating[0].votes / data.review_rating.total) * 100;
    this.five = (this.rating[1].votes / data.review_rating.total) * 100;
    this.three = (this.rating[3].votes / data.review_rating.total) * 100;
    this.two = (this.rating[2].votes / data.review_rating.total) * 100;
    this.one = (this.rating[4].votes / data.review_rating.total) * 100;
    this.featureRating = data.feature_rating;
  }
}
