import { Component, OnInit } from '@angular/core';
import { MakiosServices } from '../../services/makios-services.service';
import { Rank } from '../../../models/rank';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-rank',
  templateUrl: './rank.component.html',
  styleUrls: ['./rank.component.scss']
})
export class RankComponent implements OnInit {
  public rank: Rank[];

  constructor(private makiosService: MakiosServices) {}

  ngOnInit(): void {
    this.getRankList();
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
}