import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/do';

export class DashboardGuard implements CanActivate {
  canActivate(): Observable<boolean> {
    console.log('start: canActivate');

    return Observable.of(true)
      .delay(3000)
      .do(() => console.log('end: canActivate'));
  }
}
