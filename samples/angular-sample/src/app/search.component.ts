import { Component, DestroyRef, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { AlbumListService } from './album-list.service';
import { Album } from './album';
import { Subject, Subscription } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

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

  destroyRef = inject(DestroyRef);

  // Zadanie: spraw, aby ten sygnał wyświetlał poprawną wartość.
  numberOfAlbums = signal(0);

  // private subscription?: Subscription;

  // private onDestroy$ = new Subject<void>();

  ngOnInit(): void {
    // nie robie tych obliczeń w komponencie - to serwis mi je ma dostarczyć !
    // this.albumListService.searchAlbum$().subscribe((albums) => {
    //   this.numberOfAlbums.set(albums.length);
    // })

    this.albumListService
      .numberOfSearchedAlbum$()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((n) => this.numberOfAlbums.set(n));
  }

  // ngOnDestroy(): void {
  //   this.subscription?.unsubscribe()
  // }

  search(event: Event) {
    const text = (event.target as HTMLInputElement).value;
    this.albumListService.searchInput(text);
  }
}
