<<<<<<< HEAD
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  public base: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public page: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public last: BehaviorSubject<string> = new BehaviorSubject<string>('');

  private _currency = new BehaviorSubject<string>('USD');
  public readonly currency$ = this._currency.asObservable();
  private _sidebarVisible = new BehaviorSubject<boolean>(false);

  sidebarVisible$ = this._sidebarVisible.asObservable();

  toggleSidebar() {
    this._sidebarVisible.next(!this._sidebarVisible.value);
  }
}
=======
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  public base: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public page: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public last: BehaviorSubject<string> = new BehaviorSubject<string>('');

  private _currency = new BehaviorSubject<string>('USD');
  public readonly currency$ = this._currency.asObservable();
  private _sidebarVisible = new BehaviorSubject<boolean>(false);

  sidebarVisible$ = this._sidebarVisible.asObservable();

  toggleSidebar() {
    this._sidebarVisible.next(!this._sidebarVisible.value);
  }
}
>>>>>>> d0702d2df73e33dd270d73061880d510727a5204
