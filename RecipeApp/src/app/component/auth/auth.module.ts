import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AuthComponent} from "./auth.component";
import {SharedModule} from "../../shared/shared.module";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {AuthInterceptor} from "./auth.interceptor";

const routes: Routes = [
  {
    path:'',
    component: AuthComponent
  },
]

@NgModule({
  declarations: [
    AuthComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    }
  ]
})

export class AuthModule { }
