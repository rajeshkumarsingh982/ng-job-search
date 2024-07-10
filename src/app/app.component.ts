import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ChangeBackgroundColorDirective } from './directive/change-background-color.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChangeBackgroundColorDirective, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-job-search';
  isJobsActive: boolean = true;
  currUrl: string = '';

  constructor(private router: Router) { }

  jobsButtonClick(): void {
    this.isJobsActive = true;
    this.router.navigate(['/jobs']);
  }

  resetActive(): void {
    this.isJobsActive = false;
    this.router.navigate(['/fav-jobs']);
  }
}
