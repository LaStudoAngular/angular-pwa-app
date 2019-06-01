import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'pwa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-pwa-app';
  notes$: Observable<any[]>;

  constructor(private db: AngularFirestore) {
    this.notes$ = db.collection('notes').valueChanges();
  }
}
