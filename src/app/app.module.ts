import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { CategoriesComponent } from './categories/categories.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthService } from './services/guards/auth.service';
//import { AuthGuardService } from './services/guards/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    CategoriesComponent,
    EditUserComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    AuthService,
    //AuthGuardService,
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
