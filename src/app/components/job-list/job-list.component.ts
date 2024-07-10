import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { Jobs } from '../../model/jobDetails';
import { JobService } from '../../service/job.service';

@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.css'
})
export class JobListComponent implements OnInit {
  jobsArray: Jobs[] = [];
  favoriteStates: boolean[] = [];
  subscription$: Subscription | undefined;
  favoriteJobs: Jobs[] = [];
  currUrl: string = '';
  show: boolean = false;

  constructor(private js: JobService, private route: Router) { }

  ngOnInit(): void {
    this.subscription$ = this.js.getJobs().subscribe((res) => {
      this.jobsArray = res;
    },
      (error) => {
        alert('Error fetching jobs:' + error.message);
      })

    this.currUrl = this.route.url;
    if (this.currUrl === '/fav-jobs') {
      this.show = true;
    } else {
      this.show = false;
    }
    this.getjobDetails();
  }

  isFavorite(jobId: number): boolean {
    return this.favoriteJobs.some(job => job.id === jobId);
  }

  toggleFavorite(idx: number, job: Jobs) {
    this.favoriteStates[idx] = !this.favoriteStates[idx];
    const index = this.favoriteJobs.findIndex((selectedItem) => selectedItem?.id === job?.id);
    if (index === -1) {
      this.favoriteJobs.push(job);
    } else {
      this.favoriteJobs.splice(index, 1);
    }
    this.js.saveFavorites();
  }

  getjobDetails() {
    this.favoriteJobs = this.js.getFavoriteJobs();
  }

  ngOnDestroy() {
    this.subscription$?.unsubscribe();
  }
}
