import { Component } from '@angular/core';
import { GameApiService } from '../services/game-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public gamesData:any =[]
  public allGenres:any = []
  public allPlatform:any = []
  public stores:any = []
  public searchData:string = ''
  constructor(private game:GameApiService,private router:Router) {
    this.game.getAllGames().subscribe((res:any)=>{
      this.gamesData = res.results
    })
    this.game.getGenres().subscribe(((res:any)=>{
      this.allGenres = res.results;
      
    }))
    this.game.getPlatform().subscribe((res:any)=>{  
      this.allPlatform = res.results
    })
    this.game.getStoreFront().subscribe((res:any)=>{
     this.stores = res.results
    })
  }
  goToIndivitualGame(id:any){
    this.router.navigate(['home/single'],{queryParams:{id}})
  }
  routeToAllGame(){
    this.router.navigate(['home/all-games'])
  }
  goToGenre(genere:any){
    this.router.navigate(['home/all-games'],{queryParams:{genreId:genere.id,genreName:genere.name}})
  }
  routeToAllPlatform(){
    this.router.navigate(['home/all-platform'])

  }
  search(){
    this.router.navigate(['home/all-games'],{queryParams:{searchText:this.searchData}})
  }
  goToAllGames(platform:any){
    this.router.navigate(['home/all-games'],{queryParams:{platformId:platform.id,platformName:platform.name}})
  }
}
