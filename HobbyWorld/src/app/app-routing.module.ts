import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { CatalogComponent } from './features/catalog/catalog.component';
import { DetailsComponent } from './features/details/details.component';
import { CreatePostComponent } from './features/create-post/create-post.component';
import { ProfileComponent } from './auth/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'myProfile',
        component: ProfileComponent
      }
    ]
  },
  {
    path: 'features',
    children: [
      {
        path: 'catalog',
        component: CatalogComponent
      },
      {
        path: 'details/:postId',
        component: DetailsComponent
      },
      {
        path: 'create',
        component: CreatePostComponent
      }
    ]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
