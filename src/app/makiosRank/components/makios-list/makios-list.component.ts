import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Makio } from 'src/app/models/makio';
import { Rank } from '../../../models/rank';
import { MakiosServices } from '../../services/makios-services.service';
import { AuthService } from '@app/auth/services/auth.service';
import { ChallengeService } from '../../services/challenge.service';

@Component({
  selector: 'app-makios-list',
  templateUrl: './makios-list.component.html',
  styleUrls: ['./makios-list.component.scss']
})
export class MakiosListComponent implements OnInit {
  private interval: any;
  
  public makios: Makio[];
  public currentMakio: Makio;
  public rank: Rank[];
  public user: any;
  public loader: boolean;
  public challengeClicked: boolean;

  constructor(private makiosService: MakiosServices, private auth: AuthService, private challengeService: ChallengeService) {}

  ngOnInit(): void {
    this.getMakiosList();
    this.getRankList();
    this.getCurrentUser();
    // this.logG();
  }

  getMakiosList() {
    this.makiosService.getMakiosList().pipe(map((data) => {
      data.sort((a, b) => {
        return a.position < b.position ? -1 : 1;
      });

      return data;
    })).subscribe(response => {
      this.makios = response;
    })
  }

  getRankList() {
    this.makiosService.getRankList().pipe(map((data) => {
      data.sort((a, b) => {
        return a.position < b.position ? -1 : 1;
      });

      return data;
    })).subscribe(response => {
      this.rank = response;
    })
  }

  async getCurrentUser() {
    this.user = await this.auth.geCurrentUser();

    if(this.user) this.getUserInfo(this.user.$.W);
    else console.log("mierda")
  }

  getUserInfo(userId: string) {
    this.interval = setInterval(() => {
      if(this.makios != undefined) this.getCurrentMakio(userId);
    }, 500);
  }

  getCurrentMakio(userId: string) {
    clearInterval(this.interval)
    
    for(let i=0; i<this.makios.length; i++) {
      if(this.makios[i].uid == userId) this.currentMakio = this.makios[i]
    }
    console.log("this.currentMakio: ", this.currentMakio)
  }

  validateChallenge() {
    let challenges = this.challengeService.getChallenges().subscribe((response: any) => {
      console.log("response: ", response)
      for(let i=0; i<response.length; i++) {
        if(response[i]['challenging'] == this.currentMakio['uid']) {
          console.log("ya")
          challenges.unsubscribe();
          break;
        } else {
          challenges.unsubscribe();
          this.createChallenge()
        }
      }
    })
  }

  createChallenge() {
    let record = {};

    record['challenging'] = this.currentMakio['uid'];
    record['challenged'] = "otroUID";

    this.challengeService.createChallenge(record).then(response => {
      console.log("created: ", response)
    })
  }
}