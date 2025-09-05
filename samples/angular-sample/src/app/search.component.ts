import { Component, inject, OnInit, signal } from '@angular/core';
import { AlbumListService } from './album-list.service';
import { Album } from './album';

@Component({
  selector: 'app-search',
  template: `
    <div class="input-group mb-3">
      <span class="input-group-text">🔎</span>
      <input class="form-control" placeholder="wyszukaj" (input)="search($event)" />
      <div class="py-2 px-4 border rounded rounded-start-0">{{ numberOfAlbums() }}</div>
    </div>
  `,
})
export class SearchComponent implements OnInit {
  albumListService = inject(AlbumListService);

  // Zadanie: spraw, aby ten sygnał wyświetlał poprawną wartość.
  numberOfAlbums = signal(0);

  ngOnInit(): void {
    
    this.albumListService.searchAlbum$().subscribe((albums) => {
      this.numberOfAlbums.set(albums.length);
    })
  }

  search(event: Event) {
    const text = (event.target as HTMLInputElement).value;
    this.albumListService.searchInput(text);
  }
}
