import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataStorageService} from "../../shared/data-storage.service";
import {AuthService} from "../auth/auth.service";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private userSub: Subscription
  isAuthenticated = false;

  constructor(private dataStorageService: DataStorageService, private authService: AuthService) { }

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
    });
  }
  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

  SaveRecipes() {
    this.dataStorageService.storeRecipes();
  }

  GetRecipes() {
    this.dataStorageService.fetchRecipes().subscribe();
  }

  OnLogout() {
    this.authService.logout();
  }
}
