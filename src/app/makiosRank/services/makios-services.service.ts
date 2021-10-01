import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Makio } from 'src/app/models/makio';
import { Rank } from 'src/app/models/rank'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class MakiosServices {
  public makio: Observable<Makio[]>;
  public rank: Observable<Rank[]>;

  private makiosCollection: AngularFirestoreCollection<Makio>;
  private rankCollection: AngularFirestoreCollection<Rank>;

  constructor(private readonly afs: AngularFirestore) {
    this.makiosCollection = afs.collection<Makio>('mk');
    this.rankCollection = afs.collection<Rank>('rankNames');
  }

  public getMakiosList(): Observable<Makio[]> {
    return this.makiosCollection.snapshotChanges()
      .pipe(map(actions => actions.map(a => a.payload.doc.data() as Makio)))
  }

  public getRankList(): Observable<Rank[]> {
    return this.rankCollection.snapshotChanges()
      .pipe(map(actions => actions.map(a => a.payload.doc.data() as Rank)))
  }
}
