import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BirdsComponent } from './birds/birds.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'birds', component: BirdsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }