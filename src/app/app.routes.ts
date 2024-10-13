import { Routes } from '@angular/router';
import { PostsPageComponent } from './pages/catalogs/post-catalogs/posts-page.component';
import { AccountsPageComponent } from './pages/catalogs/accounts-page/accounts-page.component';

export const routes: Routes = [
  { path: 'catalogs/posts', component: PostsPageComponent },
  { path: 'catalogs/accounts', component: AccountsPageComponent },
];
