import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogListComponent } from './blog/pages/blog-list/blog-list.component';
import { BookListComponent } from './book/pages/book-list/book-list.component';
import { HomeListComponent } from './home/pages/home-list/home-list.component';
import { ProfileComponent } from './user/pages/profile/profile.component';
import { UserModule } from './user/user.module';

const routes: Routes = [
  {

    path: "",
    redirectTo: 'blog',
    pathMatch: 'full'

  },


];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
