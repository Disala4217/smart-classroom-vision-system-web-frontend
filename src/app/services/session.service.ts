import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  setSession(key: string, value: string): void {
    sessionStorage.setItem(key, value);
  }

  getSession(key: string): string | null {
    return sessionStorage.getItem(key);
  }

  clearSession(): void {
    sessionStorage.clear();
  }
}
