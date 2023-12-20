import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { SingleGameComponent } from './components/single-game/single-game.component';
import { AllGamesComponent } from './components/all-games/all-games.component';
import { AllPlataformComponent } from './components/all-plataform/all-plataform.component';
import { AllAchivmentComponent } from './components/all-achivment/all-achivment.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, HomePageRoutingModule],
  declarations: [
    HomePage,
    SingleGameComponent,
    AllGamesComponent,
    AllPlataformComponent,
    AllAchivmentComponent,
  ],
})
export class HomePageModule {}
