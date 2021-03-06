import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {UsersComponent} from "./users/users.component";
import {UserComponent} from "./users/user/user.component";
import {ServersComponent} from "./servers/servers.component";
import {ServerComponent} from "./servers/server/server.component";
import {EditServerComponent} from "./servers/edit-server/edit-server.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {AuthGuard} from "./auth-guard.service";
import {CanDeactivateGuard} from "./servers/edit-server/can-deactivate-guard.service";

const appRoutes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'users',component: UsersComponent, children: [
      {path: ':id/:name',component: UserComponent}
    ]},
  {
    path: 'servers',
    component: ServersComponent,
    canActivateChild: [AuthGuard],
    children: [
      {path: ':id',component: ServerComponent},
      {path: ':id/edit',component: EditServerComponent, canDeactivate: [CanDeactivateGuard]}
    ]},
  {path:'not-found', component:NotFoundComponent},
  {path:'**', redirectTo:'/not-found', pathMatch: 'full'}
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule{

}
