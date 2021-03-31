import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { IsAdminGuard } from './guards/is-admin.guard';
import { NavigationComponent } from './navigation/navigation.component';
import { LoginComponent } from './pages/login/login.component';
import { TableEditorComponent } from './pages/table-editor/table-editor.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

const routes: Routes = [
  { path: '', redirectTo: '/app/welcome', pathMatch: 'full' },

  {
    path: 'login', component: LoginComponent,
  },
  {
    path: 'app',
    component: NavigationComponent,
    children: [
      {path: 'welcome', component: WelcomeComponent, canActivate: [AuthGuard]},
      {path: 'tableEditor', component: TableEditorComponent, canActivate: [AuthGuard, IsAdminGuard]}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
