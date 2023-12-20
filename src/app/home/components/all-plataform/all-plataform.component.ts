import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameApiService } from 'src/app/services/game-api.service';

@Component({
  selector: 'app-all-plataform',
  templateUrl: './all-plataform.component.html',
  styleUrls: ['./all-plataform.component.scss'],
})
export class AllPlataformComponent  implements OnInit {

  constructor(private game:GameApiService,private router:Router) { }
  public allPlatform:any = []
  ngOnInit() {
    this.game.getPlatform().subscribe((res:any)=>{
      
      this.allPlatform = res.results
      
    })
  }
  goToAllGames(platform:any){
    this.router.navigate(['home/all-games'],{queryParams:{platformId:platform.id,platformName:platform.name}})
  }

}
