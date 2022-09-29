import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeListComponent } from './pages/home-list/home-list.component';
import { HomeItemComponent } from './components/home-item/home-item.component';



@NgModule({
  declarations: [
    HomeListComponent,
    HomeItemComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
