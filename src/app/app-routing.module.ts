import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Cmp1Component } from './cmp1/cmp1.component';
import { Cmp2Component } from './cmp2/cmp2.component';
import { Cmp3Component } from './cmp3/cmp3.component';
import { NotFoundComponent } from './not-found/not-found.component';

// We can define paths/urls to components in the routes array.
const routes: Routes = [
  { path: 'cmp1', component: Cmp1Component },
  { path: 'cmp2', component: Cmp2Component },
  { path: 'cmp3', component: Cmp3Component },
  { path: '**', component: NotFoundComponent },
  { path: '', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
