import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Jobs, JobDetails } from '../model/jobDetails';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private favoriteJobs: Jobs[] = [];
  private apiUrl = '/jobs';
  private favoritesKey = 'favoriteJobs';

  constructor(private http: HttpClient) { 
    this.loadFavorites();
  }

  getFavoriteJobs(): Jobs[] {
    return this.favoriteJobs;
  }
  
  getJobs(): Observable<Jobs[]> {
    return this.http.get<Jobs[]>(`${this.apiUrl}`);
  } 

  getJobsDetialsData(job: number) {
    return this.http.get<JobDetails>(`${this.apiUrl}/${job}` );
  }

  private loadFavorites(): void {
    const favoritesString = localStorage.getItem(this.favoritesKey);
    if (favoritesString) {
      this.favoriteJobs = JSON.parse(favoritesString);
    }
  }

  public saveFavorites(): void {
    localStorage.setItem(this.favoritesKey, JSON.stringify(this.favoriteJobs));
  }
}
