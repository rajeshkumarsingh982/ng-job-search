import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgIf, DatePipe } from '@angular/common';
import { JobDetails } from '../../model/jobDetails';
import { JobService } from '../../service/job.service';

@Component({
  selector: 'app-view-job-description',
  standalone: true,
  imports: [NgIf, DatePipe],
  templateUrl: './view-job-description.component.html',
  styleUrl: './view-job-description.component.css'
})
export class ViewJobDescriptionComponent implements OnInit {
  jobId: number | undefined;
  jobDetailsData: JobDetails | undefined;
  constructor(private route: ActivatedRoute, private js: JobService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.jobId = +params['id'];
      this.getJobDetails(this.jobId);
    })
  }

  getJobDetails(id: number) {
    this.js.getJobsDetialsData(id).subscribe((res) => {
      this.jobDetailsData = res;
    }, (error) => {
      alert("Error :" + error.message);
    })
  }

  returnBackJobs(): void {
    this.router.navigate(['/jobs']);
  }
}
