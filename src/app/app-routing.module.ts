import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './componentesP/home/home.component';
import { ProductosComponent } from './componentesP/productos/productos.component';
import { LoginComponent } from './componentesP/login/login.component';

import { ResgistroComponent } from './componentesP/resgistro/resgistro.component';




const routes: Routes = [
  {path: '',pathMatch:'full',redirectTo:'home'},
  {path: 'home',component:HomeComponent},
  {path: 'playeras',component:ProductosComponent},
  {path: 'login',component:LoginComponent},
  {path: 'registro',component:ResgistroComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
