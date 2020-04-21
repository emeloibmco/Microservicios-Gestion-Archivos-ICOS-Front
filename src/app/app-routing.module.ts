import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProjectsComponent} from './components/projects/projects.component';
import {AssetsComponent} from './components/assets/assets.component';
import {AddAssetComponent} from './components/add-asset/add-asset.component';
import {AddProjectComponent} from './components/add-project/add-project.component';
import { TrashComponent } from './components/trash/trash.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';



const routes: Routes =[
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'projects', component: ProjectsComponent
  },
  {
    path: 'assets/:id', component: AssetsComponent
  },
  {
    path: 'addAsset/:id', component: AddAssetComponent
  },
  {
    path: 'addProject', component: AddProjectComponent
  },
  {
    path: 'trash/:id', component: TrashComponent
  },
  {
    path: 'signup', component: SignupComponent
  },
  { path: 'login', component: LoginComponent,  pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [ProjectsComponent, AssetsComponent];
