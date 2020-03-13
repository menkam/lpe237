import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./auth/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'resetpwd',
    loadChildren: () => import('./auth/resetpwd/resetpwd.module').then( m => m.ResetpwdPageModule)
  },
  {
    path: 'contacts',
    loadChildren: () => import('./pages/contacts/contacts.module').then( m => m.ContactsPageModule)
  },
  {
    path: 'messagerie',
    loadChildren: () => import('./pages/messagerie/messagerie.module').then( m => m.MessageriePageModule)
  },
  {
    path: 'galeries',
    loadChildren: () => import('./pages/galeries/galeries.module').then( m => m.GaleriesPageModule)
  },
  {
    path: 'apropos',
    loadChildren: () => import('./pages/apropos/apropos.module').then( m => m.AproposPageModule)
  },
  {
    path: 'maintenance',
    loadChildren: () => import('./pages/application/maintenance/maintenance.module').then( m => m.MaintenancePageModule)
  },
  {
    path: 'menus',
    loadChildren: () => import('./pages/application/menus/menus.module').then( m => m.MenusPageModule)
  },
  {
    path: 'restaurerapplication',
    // tslint:disable-next-line:max-line-length
    loadChildren: () => import('./pages/application/restaurerapplication/restaurerapplication.module').then( m => m.RestaurerapplicationPageModule)
  },
  {
    path: 'creerunpointderestauration',
    // tslint:disable-next-line:max-line-length
    loadChildren: () => import('./pages/application/creerunpointderestauration/creerunpointderestauration.module').then( m => m.CreerunpointderestaurationPageModule)
  },
  {
    path: 'nouvelutilisateur',
    loadChildren: () => import('./pages/utilisateurs/nouvelutilisateur/nouvelutilisateur.module').then( m => m.NouvelutilisateurPageModule)
  },
  {
    path: 'modifierutilisateur',
    // tslint:disable-next-line:max-line-length
    loadChildren: () => import('./pages/utilisateurs/modifierutilisateur/modifierutilisateur.module').then( m => m.ModifierutilisateurPageModule)
  },
  {
    path: 'nouvelgroupeutilisateur',
    // tslint:disable-next-line:max-line-length
    loadChildren: () => import('./pages/groupeutilisateurs/nouvelgroupeutilisateur/nouvelgroupeutilisateur.module').then( m => m.NouvelgroupeutilisateurPageModule)
  },
  {
    path: 'modifiergroupeutilisateur',
    // tslint:disable-next-line:max-line-length
    loadChildren: () => import('./pages/groupeutilisateurs/modifiergroupeutilisateur/modifiergroupeutilisateur.module').then( m => m.ModifiergroupeutilisateurPageModule)
  },
  {
    path: 'tabcahet',
    loadChildren: () => import('./pages/gestions/cahets/tabcahet/tabcahet.module').then( m => m.TabcahetPageModule)
  },
  {
    path: 'recettescachet',
    loadChildren: () => import('./pages/gestions/cahets/recettescachet/recettescachet.module').then( m => m.RecettescachetPageModule)
  },
  {
    path: 'depensescachet',
    loadChildren: () => import('./pages/gestions/cahets/depensescachet/depensescachet.module').then( m => m.DepensescachetPageModule)
  },
  {
    path: 'bilancachet',
    loadChildren: () => import('./pages/gestions/cahets/bilancachet/bilancachet.module').then( m => m.BilancachetPageModule)
  },
  {
    path: 'tabmomo',
    loadChildren: () => import('./pages/gestions/momos/tabmomo/tabmomo.module').then( m => m.TabmomoPageModule)
  },
  {
    path: 'comptemomo',
    loadChildren: () => import('./pages/gestions/momos/comptemomo/comptemomo.module').then( m => m.ComptemomoPageModule)
  },
  {
    path: 'bilanmomo',
    loadChildren: () => import('./pages/gestions/momos/bilanmomo/bilanmomo.module').then( m => m.BilanmomoPageModule)
  },
  {
    path: 'tabphoto',
    loadChildren: () => import('./pages/gestions/photos/tabphoto/tabphoto.module').then( m => m.TabphotoPageModule)
  },
  {
    path: 'recettephoto',
    loadChildren: () => import('./pages/gestions/photos/recettephoto/recettephoto.module').then( m => m.RecettephotoPageModule)
  },
  {
    path: 'depensephoto',
    loadChildren: () => import('./pages/gestions/photos/depensephoto/depensephoto.module').then( m => m.DepensephotoPageModule)
  },
  {
    path: 'bilanphoto',
    loadChildren: () => import('./pages/gestions/photos/bilanphoto/bilanphoto.module').then( m => m.BilanphotoPageModule)
  },
  {
    path: 'personnelle',
    loadChildren: () => import('./pages/gestions/personnelle/personnelle.module').then( m => m.PersonnellePageModule)
  },
  {
    path: 'misejours',
    loadChildren: () => import('./pages/gestions/misejours/misejours.module').then( m => m.MisejoursPageModule)
  },
  {
    path: 'enregistrer',
    loadChildren: () => import('./pages/gestions/enregistrer/enregistrer.module').then( m => m.EnregistrerPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
