import {Component, inject, signal} from '@angular/core';
import {AlbumListService} from "./album-list.service";

@Component({
  selector: 'app-search',
  template: `
    <div class="input-group mb-3">
        <span class="input-group-text">🔎</span>
        <input class="form-control" placeholder="wyszukaj" (input)="search($event)" />
        <div class="py-2 px-4 border rounded rounded-start-0">{{ numberOfAlbums() }}</div>
    </div>
  `
})
export class SearchComponent {
    albumListService = inject(AlbumListService);

    // Zadanie: spraw, aby ten sygnał wyświetlał poprawną wartość.
    numberOfAlbums = signal(0);

    search(event: Event) {
        const text = (event.target as HTMLInputElement).value;
        this.albumListService.searchInput(text);
    }
}
