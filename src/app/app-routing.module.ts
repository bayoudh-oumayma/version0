import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './core/account/account.component';
import { ContentComponent } from './core/content/content.component';
import { LoginComponent } from './core/login/login.component';
import { TypeQrComponent } from './core/type-qr/type-qr.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  // {path:'account',},
  {path:'typeqr',component:TypeQrComponent},
  {path:'content',loadChildren:()=>import('./core/content/content.module').then(m=>m.ContentModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
