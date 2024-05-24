import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AudiComponent } from './components/audi/audi.component';
import { FiatComponent } from './components/fiat/fiat.component';
import { FordComponent } from './components/ford/ford.component';
import { Page404Component } from "./components/page404/page404.component";

const routes: Routes = [
  {
    path:'',
    redirectTo:'/home',
    pathMatch: 'full'
  },
  { path: "home",
    component: HomeComponent,
    title: 'Home',
  },
  { path: 'fiat',
    component: FiatComponent,
    title: 'Fiat',
  },
  { path: 'ford',
    component: FordComponent,
    title: 'Ford',
  },
  { path: 'audi',
    component: AudiComponent,
    title: 'Audi',
   },
  { path: '**',
    component: Page404Component
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
