import {RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { EngagementComponent } from './engagement/engagement.component';
import { StudentsAtRiskComponent } from './students-at-risk/students-at-risk.component';
import {AddTeacherComponent} from './add-teacher/add-teacher.component';
import { MonitorLiveClassComponent } from './monitor-live-class/monitor-live-class.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'attendance-summary', component: AttendanceComponent },
  { path: 'engagement-summary', component: EngagementComponent },
  { path: 'students-at-risk', component: StudentsAtRiskComponent },
  {path:'add-teacher', component: AddTeacherComponent },
  { path: 'monitor-live-class', component: MonitorLiveClassComponent },
  { path: '**', redirectTo: '' },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
