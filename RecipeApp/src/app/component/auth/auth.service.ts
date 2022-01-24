import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, tap} from "rxjs/operators";
import {BehaviorSubject, Observable, Subject, throwError} from "rxjs";
import {User} from "./user.model";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user = new BehaviorSubject<User>(null);

  private apiKey = 'AIzaSyDRoqgUlMObXo4uWqWHM8GJYHJF2yFnO20';
  private baseUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:';
  private signUp = 'signUp?key=';
  private signIn = 'signInWithPassword?key=';
  private autoLogoutTimer: any;

  constructor(private http: HttpClient, private router: Router) {
  }

  signupRequest(email: string, password: string) {
    const url = this.baseUrl + this.signUp + this.apiKey
    return this.processRequest(url, email, password)

  }

  loginRequest(email: string, password: string) {
    const url = this.baseUrl + this.signIn + this.apiKey
    return this.processRequest(url, email, password);
  }

  logout() {
    this.user.next(null);
    this.router.navigate(['/auth']);
    localStorage.removeItem('userData');
    if (this.autoLogoutTimer) {
      clearTimeout(this.autoLogoutTimer);
    }
    this.autoLogoutTimer = null;
  }

  autoLogin() {
    const userData: {
      email: string,
      id: string,
      _token: string,
      _tokenExpirationDate: string
    } = JSON.parse(localStorage.getItem('userData'));
    if (!userData) {
      return;
    }
    const loadedUser = new User(userData.email, userData.id, userData._token, new Date(userData._tokenExpirationDate));
    if (loadedUser.token) {
      this.user.next(loadedUser);
      const expirationDuration = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
      this.autoLogout(expirationDuration);
    }
  }

  autoLogout(expirationDuration: number) {
    this.autoLogoutTimer = setTimeout(() => {
      this.logout()
    }, expirationDuration)
  }

  private processRequest(url: string, email: string, password: string) {
    const body = {email: email, password: password, returnSecureToken: true};
    return this.http.post<AuthResponseData>(url, body)
      .pipe(
        catchError(this.handleError),
        tap(resData => this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn)),
      );
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage: string;
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This email exists already!'
        break;
      case 'TOO_MANY_ATTEMPTS_TRY_LATER':
        errorMessage = 'To many attempts to sign in please try again later.'
        break;
      case 'EMAIL_NOT_FOUND':
      case 'INVALID_PASSWORD':
        errorMessage = 'Email/Password is Invalid.'
        break;
      default:
        errorMessage = 'An unknown Error has occurred!';
    }
    return throwError(errorMessage)
  }

  private handleAuthentication(email: string, userId: string, token: string, expiresIn: number) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000); //get current date as time since 1970 in milliseconds add expires in seconds after converting to milliseconds
    const user = new User(email, userId, token, expirationDate);
    this.user.next(user);
    this.autoLogout(expiresIn * 1000)
    localStorage.setItem('userData', JSON.stringify(user));
  }
}


export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
  displayName?: string;
}
