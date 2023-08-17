import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userSubject = new ReplaySubject<UserInfo>();
  readonly user$ = this.userSubject.asObservable();

  constructor(private http: HttpClient) {}

  login() {
    window.location.href = `auth/login`;
  }

  logout() {
    window.location.href = 'auth/logout';
  }

  getUser() {
    this.http.get<UserInfo>('user').subscribe((user) => {
      this.userSubject.next(user);
    });
  }

  isAuthenticated() {
    return this.userSubject?.pipe(
      map((user: UserInfo) => user?.isAuthenticated)
    );
  }
}

export interface UserInfo {
  isAuthenticated: boolean;
  name?: string;
  initials?: string;
}
