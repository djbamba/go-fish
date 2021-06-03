import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { AddLureComponent } from './lures/add-lure/add-lure.component';
import { LureComponent } from './lures/lure.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {path: 'lures', component: LureComponent},
  {path: 'lures/add', component: AddLureComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
