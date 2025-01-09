import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { CategoriesComponent } from './categories/categories.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuardService } from './services/guards/auth-guard.service';

const routes: Routes = [
    //{ path : '', redirectTo : '/home', pathMatch : 'full' },
    { path : '', component : HomeComponent},
    { path : 'home', component : HomeComponent},
    { 
      path : 'users',
      component : UsersComponent,
      canActivate : [AuthGuardService]
    },
    { path : 'edit', component : EditUserComponent},
    { path : 'not-found', component : PageNotFoundComponent},
    
    //{ path : 'users/:id/:name', component : UsersComponent},
    { 
      path : 'categories', 
      component : CategoriesComponent,
      canActivateChild : [AuthGuardService],
      children : [{
        path : 'users/:id/:name', component : UsersComponent
        //path : ':id/:name/edit', component : EditUserComponent
      }]

    },
    { path : '**', redirectTo : 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
