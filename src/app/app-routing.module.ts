import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {LoginPage} from './login/login.page';

const appDiaControlRoutes: Routes = <Routes>[
    {
    path: '',
    component: LoginPage,
    },
  {
    path: 'registration',
    loadChildren: './registration/registration.module#RegistrationPageModule',
  },
    {
        path: 'main-app',
        loadChildren: './main-app/main-app.module#MainAppPageModule'
    }
]

@NgModule({
  imports: [
    RouterModule.forRoot(appDiaControlRoutes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
