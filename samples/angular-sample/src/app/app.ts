import { Component, signal } from '@angular/core';
import {SearchComponent} from "./search.component";
import {AlbumListComponent} from "./album-list.component";

@Component({
  selector: 'app-root',
    imports: [
        SearchComponent,
        AlbumListComponent,
    ],
  template: `
    <div data-bs-theme="dark" class="d-block p-5 bg-body-tertiary text-white min-vh-100">
        <app-search></app-search>
        <app-album-list></app-album-list>
    </div>
  `
})
export class App {
  protected readonly title = signal('angular-sample');
}
