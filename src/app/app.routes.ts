import { Routes } from '@angular/router';
import { JobListComponent } from './components/job-list/job-list.component';
import { ViewJobDescriptionComponent } from './components/view-job-description/view-job-description.component';

export const routes: Routes = [
    {
        path: 'jobs', component: JobListComponent
    },
    {
        path: 'jobs/:id', component: ViewJobDescriptionComponent
    },
    { path: 'fav-jobs', component: JobListComponent },
    {
        path: '**', redirectTo: 'jobs', pathMatch: 'full'
    }
];
