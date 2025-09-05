import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { AlbumListService } from './album-list.service';
import { Album } from './album';
import { Subscription } from 'rxjs';

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
export class SearchComponent implements OnInit, OnDestroy {

  albumListService = inject(AlbumListService);

  // Zadanie: spraw, aby ten sygnał wyświetlał poprawną wartość.
  numberOfAlbums = signal(0);

  private subscription?: Subscription;

  ngOnInit(): void {
    
    // nie robie tych obliczeń w komponencie - to serwis mi je ma dostarczyć !
    // this.albumListService.searchAlbum$().subscribe((albums) => {
    //   this.numberOfAlbums.set(albums.length);
    // })

    this.subscription = this.albumListService.numberOfSearchedAlbum$().subscribe(n => this.numberOfAlbums.set(n))
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }

  search(event: Event) {
    const text = (event.target as HTMLInputElement).value;
    this.albumListService.searchInput(text);
  }
}
