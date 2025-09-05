import {Component, inject, OnDestroy, signal} from '@angular/core';
import {AlbumListService} from "./album-list.service";
import {Album} from "./album";

@Component({
  selector: 'app-album-list',
  template: `
      <ul class="list-group">
          @for (album of albumList(); track album.id) {
              <li class="list-group-item">{{album.title}}</li>
          }
      </ul>
  `
})
export class AlbumListComponent implements OnDestroy {

    albumList = signal<Album[]>([]);
    private albumListService = inject(AlbumListService);
    private readonly subscription = this.albumListService.searchAlbum$().subscribe(albums => this.albumList.set(albums));

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
