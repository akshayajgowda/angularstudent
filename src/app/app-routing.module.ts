import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { StudentsComponent } from './students/students.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{
  path:'', redirectTo:'/home', pathMatch:'full'
},
{path:'home', component:HomeComponent},
{path:'login', component:LoginComponent},
{path:'students', component:StudentsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
