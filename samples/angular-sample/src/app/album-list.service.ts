import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, Subject, switchMap, share, BehaviorSubject } from 'rxjs';
import { Album } from './album';

@Injectable({
  providedIn: 'root',
})
export class AlbumListService {
  private httpClient = inject(HttpClient);
  private inputText = new BehaviorSubject<string>('');

  private album$ = this.httpClient
    .get<Album[]>('https://jsonplaceholder.typicode.com/albums')
    .pipe(share());

  //   private getAlbums() {
  //     return this.httpClient
  //       .get<Album[]>('https://jsonplaceholder.typicode.com/albums')
  //       .pipe(share());
  //   }

  searchInput(text: string) {
    this.inputText.next(text);
  }

  searchAlbum$(): Observable<Album[]> {
    return this.inputText.pipe(
      switchMap((text) =>
        this.album$.pipe(
          map((albums) =>
            albums.filter((album) => album.title.toLowerCase().includes(text.toLowerCase()))
          )
        )
      )
    );
  }

  numberOfSearchedAlbum$(): Observable<number> {
    return this.searchAlbum$().pipe(map((albums) => albums.length));
  }
}
