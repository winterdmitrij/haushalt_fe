import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AccountsPageComponent } from './pages/catalogs/accounts-page/accounts-page.component';
import { PostsPageComponent } from './pages/catalogs/post-catalogs/posts-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavigationComponent,
    AccountsPageComponent,
    PostsPageComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
