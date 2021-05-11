import { Component } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'translocotest';


  constructor(private translocoService: TranslocoService) {
    this.title = this.translocoService.translate('titre');
  }
}
