import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Iteration1Component } from './iteration-1.component';
import { AppComponent as AppComponentBookList } from './book-list/app.component';
import { AppComponent as AppComponentBookListRefactored } from './book-list-refactored/app.component';
import { AppComponent as AppComponentBookDetails } from './book-details/app.component';

export const routes: Routes = [
  {
    path: '',
    component: Iteration1Component,
    children: [
      { path: '', redirectTo: 'components', pathMatch: 'full' },
      { path: 'components', component: AppComponentBookList },
      { path: 'property-bindings', component: AppComponentBookListRefactored },
      { path: 'event-bindings', component: AppComponentBookDetails }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class Iteration1RoutingModule { }
