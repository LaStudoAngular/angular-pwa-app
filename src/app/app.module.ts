import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// ROUTING
import { AppRoutingModule } from './app-routing.module';

// COMPONENTS
import { AppComponent } from './app.component';

// MODULES
import { LayoutModule } from './modules/layout/layout.module';
import { CoreModule } from './modules/core.module';

// MATERIAL DESIGN
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// FIREBASE
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    // ROUTING
    AppRoutingModule,
    // MATERIAL DESIGN
    BrowserAnimationsModule,
    // FIREBASE
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    // MODULES
    CoreModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
