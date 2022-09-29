import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogListComponent } from './blog/pages/blog-list/blog-list.component';
import { BlogItemComponent } from './blog/components/blog-item/blog-item.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { CommandBarComponent } from './shared/components/command-bar/command-bar.component';
import { BlogModule } from './blog/blog.module';
import { BookListComponent } from './book/pages/book-list/book-list.component';
import { BookItemComponent } from './book/components/book-item/book-item.component';
import { BookModule } from './book/book.module';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [
    AppComponent,
    // BookListComponent,
    // BookItemComponent,
    // BlogListComponent,
    // BlogItemComponent,
    HeaderComponent,
    CommandBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BookModule,
    BlogModule,
    UserModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
