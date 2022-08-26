import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        loadComponent: () => import('./test/test.component').then(m => m.TestComponent)
      },
    ]),
  ],
  providers: [],
})
export class RemoteEntryModule {}
