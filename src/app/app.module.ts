import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { WavyComponent } from './pages/wavy/wavy.component';
import { ScoreComponent } from './pages/score/score.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TabsComponent } from './components/tabs/tabs.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    WavyComponent,
    ScoreComponent,
    SidebarComponent,
    TabsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
