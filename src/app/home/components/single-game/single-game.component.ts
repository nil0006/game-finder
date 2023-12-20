import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameApiService } from 'src/app/services/game-api.service';

@Component({
  selector: 'app-single-game',
  templateUrl: './single-game.component.html',
  styleUrls: ['./single-game.component.scss'],
})
export class SingleGameComponent  implements OnInit {
  achivementCount: number = 0;


  constructor(private activeRoute:ActivatedRoute,private game:GameApiService,private router:Router) { }
  public indivitualGameData:any = [];
  public screenShotList :any = []
  public achivements: any = [];
  public showMore:boolean = false;
  ngOnInit() {
    this.activeRoute.queryParams.subscribe((res:any)=>{
      this.game.getIndivitualGame(res.id).subscribe((res:any)=>{
        console.log(res);
        this.indivitualGameData = res;
      })
      this.game.getIndivitualScreenShots(res.id).subscribe((res:any)=>{
        console.log(res);
        this.screenShotList = res.results
      })
      this.game.getAchivements(res.id).subscribe((res:any)=>{
        console.log(res);
        this.achivements = res.results
        this.achivementCount = res.count
      })
    })
  }
  goToAllAchivements(id:number){
    this.router.navigate(['home/all-achivements'],{queryParams:{id}})
  }
}
