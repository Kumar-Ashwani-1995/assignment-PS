import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '' ,redirectTo :"route-1", pathMatch:"full" },
  { path: 'route-1', loadChildren: () => import('./route-one/route-one.module').then(m => m.RouteOneModule) }, 
  { path: 'route-2', loadChildren: () => import('./route-two/route-two.module').then(m => m.RouteTwoModule) }, 
  { path: 'route-3', loadChildren: () => import('./route-three/route-three.module').then(m => m.RouteThreeModule) }, 
  { path: 'route-4', loadChildren: () => import('./route-four/route-four.module').then(m => m.RouteFourModule) }, 
  { path: 'route-5', loadChildren: () => import('./route-five/route-five.module').then(m => m.RouteFiveModule) },
  { path: 'route-6', loadChildren: () => import('./route-six/route-six.module').then(m => m.RouteSixModule) },
  { path: 'pageNotFound', loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule) },
  { path: '**', loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
