import { Component, ApplicationRef } from '@angular/core';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/first';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';

  constructor(applicationRef: ApplicationRef) {
    applicationRef.isStable
      .filter(isStable => isStable)
      .first()
      .subscribe(() => console.log('application is stable'));
  }
}
