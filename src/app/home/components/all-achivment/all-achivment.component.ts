import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { GameApiService } from 'src/app/services/game-api.service';

@Component({
  selector: 'app-all-achivment',
  templateUrl: './all-achivment.component.html',
  styleUrls: ['./all-achivment.component.scss'],
})
export class AllAchivmentComponent  implements OnInit {
  achivements: any;
  nextUrl: any;

  constructor(private game:GameApiService,private activeRoute:ActivatedRoute) { }

  ngOnInit() {
    this.activeRoute.queryParams.subscribe((res:any)=>{
      this.game.getAchivements(res.id).subscribe((res:any)=>{
        console.log(res);
        this.achivements = res.results
        this.nextUrl = res.next
      })
    })
  }
  onIonInfinite(ev:any){
    if(this.nextUrl){
    this.game.getNextApiData(this.nextUrl).subscribe((res:any)=>{
      console.log(res);
      this.achivements = [...this.achivements,...res.results]
      this.nextUrl = res.next
      setTimeout(() => {
        (ev as InfiniteScrollCustomEvent).target.complete();
      }, 500);
    })
  }
  (ev as InfiniteScrollCustomEvent).target.complete();
  }
}
