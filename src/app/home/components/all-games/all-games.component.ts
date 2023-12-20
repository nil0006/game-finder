import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { GameApiService } from 'src/app/services/game-api.service';

@Component({
  selector: 'app-all-games',
  templateUrl: './all-games.component.html',
  styleUrls: ['./all-games.component.scss'],
})
export class AllGamesComponent  implements OnInit {

  constructor(private activeRoute:ActivatedRoute,private game:GameApiService,private router:Router) { }
  public allGames:any = []
  public headder:string = 'Populer'
  public nextUrl:string = ''
  async ngOnInit() {
    this.activeRoute.queryParams.subscribe((res:any)=>{
      console.log(res);
      if(res.genreId){
        console.log(res.genreId);
        this.headder = res.genreName
        this.game.getByGenreId(res.genreId).subscribe((res:any)=>{
          this.allGames = res.results
          this.nextUrl = res.next
        })
      }
      else if(res.platformId){
        this.headder = res.platformName
        this.game.getByPlatformId(res.platformId).subscribe((res:any)=>{
          this.allGames = res.results;
          this.nextUrl = res.next
        })
      }
      else if(res.searchText){
        this.headder = 'search'
        this.game.getSearchData(res.searchText).subscribe((res:any)=>{
          this.allGames = res.results;
          this.nextUrl = res.next
        })

      }
      else{
        this.game.getAllGames().subscribe((res:any)=>{
          console.log(res);
          this.allGames = res.results
          this.nextUrl = res.next
        })
      }
      
    })
    

  }
  goToIndivitualGame(id:any){
    this.router.navigate(['home/single'],{queryParams:{id}})
  }

onIonInfinite(ev:any){
  console.log(ev);
  this.game.getNextApiData(this.nextUrl).subscribe((res:any)=>{
    console.log(res);
    this.allGames = [...this.allGames,...res.results]
    this.nextUrl = res.next
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  })
  
}
}
