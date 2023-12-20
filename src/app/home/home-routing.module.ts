import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { SingleGameComponent } from './components/single-game/single-game.component';
import { AllGamesComponent } from './components/all-games/all-games.component';
import { AllPlataformComponent } from './components/all-plataform/all-plataform.component';
import { AllAchivmentComponent } from './components/all-achivment/all-achivment.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },{
    path:'single',
    component:SingleGameComponent
  },{
    path:'all-games',
    component:AllGamesComponent
  },
  {
    path:'all-platform',
    component:AllPlataformComponent
  },{
    path:'all-achivements',
    component:AllAchivmentComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
