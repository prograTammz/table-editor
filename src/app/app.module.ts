import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { DexieService } from './services/dexie.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


/* Angular Material*/
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
// Components

import { LoginComponent } from './pages/login/login.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { TableEditorComponent } from './pages/table-editor/table-editor.component';
import { NavigationComponent } from './navigation/navigation.component';


const angularMaterialImports = [
  MatDialogModule,
  MatProgressSpinnerModule,
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatDividerModule,
  MatButtonModule
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WelcomeComponent,
    TableEditorComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ...angularMaterialImports
  ],
  providers: [DexieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
