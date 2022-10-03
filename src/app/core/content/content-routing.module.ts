import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfficheComponent } from './affiche/affiche.component';
import { ContentComponent } from './content.component';

const routes: Routes = [
  {path:'',component:ContentComponent},
  {path:'affiche',component:AfficheComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule { }
