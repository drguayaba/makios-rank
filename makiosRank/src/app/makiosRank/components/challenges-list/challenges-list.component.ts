import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/auth/services/auth.service';
import { ChallengeService } from '@app/makiosRank/services/challenge.service';
import { MakiosServices } from '@app/makiosRank/services/makios-services.service';
import { Makio } from '@app/models/makio';
import { map } from 'rxjs/internal/operators/map';

@Component({
  selector: 'app-challenges-list',
  templateUrl: './challenges-list.component.html',
  styleUrls: ['./challenges-list.component.scss']
})
export class ChallengesListComponent implements OnInit {
  private interval: any;
  private user: any = null;
  
  public challenges: any = null;
  public uid: string = null;
  public makios: Makio[] = null;

  constructor(private challengesService: ChallengeService, private auth: AuthService, private makiosService: MakiosServices) {}

  ngOnInit(): void {
    this.getChallenges();
    this.getCurrentMakio();
    this.getMakiosList();

    this.interval = setInterval(() => {
      if(this.makios != null && this.user != null && this.challenges != null) this.setList();
    }, 500);
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

  getChallenges() {
    this.challengesService.getChallenges().subscribe(response => {
      this.challenges = response;
    })
  }

  getCurrentMakio() {
    this.auth.geCurrentUser().then(response => {
      this.user = response;
      this.uid = this.user.$.W
    })
  }

  setList() {
    clearInterval(this.interval);
    console.log("ya")
    console.log("challenges: ", this.challenges)
    console.log("user: ", this.user)
    console.log("id: ", this.uid)
    console.log("makios: ", this.makios)
  }
}