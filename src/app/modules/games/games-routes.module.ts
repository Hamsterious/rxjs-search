// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Common type imports
import { IndexComponent } from './index/index.component';
import { DetailsComponent } from './details/details.component';

// Route definitions
const routes: Routes = [
  {
    path: '', component: IndexComponent
  },
  {
    path: 'details/:id', component: DetailsComponent
  }
];

// Module
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class GamesRoutesModule { }
