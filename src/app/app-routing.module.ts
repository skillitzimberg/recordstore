import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { WelcomeComponent } from './welcome/welcome.component';

const appRoutes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'store', component: MarketplaceComponent },
  { path: 'albums/:id', component: AlbumDetailComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'albums/edit/:id', component: AdminComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
