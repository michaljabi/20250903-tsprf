import { inject, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {map, Subject, switchMap} from "rxjs";
import { Album } from "./album";


@Injectable({
  providedIn: 'root'
})
export class AlbumListService{

    private httpClient = inject(HttpClient);
    private inputText = new Subject<string>();

    private getAlbums() {
        return this.httpClient.get<Album[]>('https://jsonplaceholder.typicode.com/albums');
    }

    searchInput(text: string) {
        this.inputText.next(text);
    }

    searchAlbum$() {
        return this.inputText.pipe(
            switchMap((text) =>
                this.getAlbums()
                    .pipe(
                        map(
                            (albums) => albums.filter(album => album.title.toLowerCase().includes(text.toLowerCase())),
                        )
                    )
            )
        )
    }
}
