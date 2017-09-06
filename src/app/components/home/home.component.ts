import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  latestUploads = ['Pic 1', 'Pic 2', 'Pic 3', 'Pic 4', 'Pic 5', 'Pic 6', 'Pic 7', 'Pic 8'];

  constructor(private authService: AuthService) { }

  getAllSortedUploads() {

  }

  ngOnInit() {
  }

}
