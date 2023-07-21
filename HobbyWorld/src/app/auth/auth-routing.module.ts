import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthActivate } from './guards/auth.activate';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
        //canActivate: [AuthActivate]
    },
    {
        path: 'register',
        component: RegisterComponent,
        //canActivate: [AuthActivate]
    },
    {
        path: 'myProfile',
        component: ProfileComponent,
        //canActivate: [AuthActivate]
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
