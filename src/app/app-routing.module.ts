import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard'

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['iniciar-sesion'])

const routes: Routes = [
  {
    path: 'makios',
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
    loadChildren: () => import('./makiosRank/components/makios-list/makios-list.module').then(m => m.MakiosListModule)
  },

  {
    path: 'rank',
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
    loadChildren: () => import('./makiosRank/components/rank/rank.module').then(m => m.RankModule)
  },

  {
    path: 'retos',
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
    loadChildren: () => import('./makiosRank/components/challenges-list/challenges-list.module').then(m => m.ChallengesListModule)
  },
  
  { path: 'iniciar-sesion', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule) },

  { path: '', redirectTo: '/makios', pathMatch: 'full' },

  { path: '**', loadChildren: () => import('./makiosRank/components/makios-list/makios-list.module').then(m => m.MakiosListModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
