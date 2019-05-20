// angular
import { NgModule } from '@angular/core';

// app
import { Routes, RouterModule } from '@angular/router';
import { ScrumsComponent } from './scrums/scrums.component';


const routes: Routes =  [
  {
      path: '',
      redirectTo: '',
      component: ScrumsComponent,
      pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
