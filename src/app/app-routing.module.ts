import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'home',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'addPlayer',
    loadChildren: () => import('./add-player/add-player.module').then( m => m.AddPlayerPageModule)
  },
  {
    path: 'updatePlayer',
    loadChildren: () => import('./update-player/update-player.module').then( m => m.UpdatePlayerPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./authentification/authentification.module').then( m => m.AuthentificationPageModule)
  },
  {
    path: 'detailsPlayer/:id',
    loadChildren: () => import('./details-player/details-player.module').then( m => m.DetailsPlayerPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
