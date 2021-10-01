import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChallengeService {
  private challengesCollection: AngularFirestoreCollection<any>;

  constructor(private readonly afs: AngularFirestore, private fireServices: AngularFirestore) {
    this.challengesCollection = afs.collection<any>('challenges');
  }

  getChallenges(): Observable<any> {
    return this.challengesCollection.snapshotChanges()
      .pipe(map(actions => actions.map(a => a.payload.doc.data() as any)));
  }

  createChallenge(record) {
    return this.fireServices.collection('challenges').add(record);
  }
}