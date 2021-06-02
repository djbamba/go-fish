import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LureService } from './services/lure.service';
import { LureListComponent } from './lures/lure-list/lure-list.component';
import { HomeComponent } from './home/home/home.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { LureComponent } from './lures/lure.component';

@NgModule({
  declarations: [AppComponent, LureListComponent, HomeComponent, NavComponent, LureComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [LureService, Title],
  bootstrap: [AppComponent],
})
export class AppModule {}
