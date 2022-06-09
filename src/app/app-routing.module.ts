import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ScoreComponent } from './pages/score/score.component';
import { WavyComponent } from './pages/wavy/wavy.component';

const routes: Routes = [
{path: '', component: HomeComponent},
{path: 'wavy', component: WavyComponent},
{path: 'score', component: ScoreComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
