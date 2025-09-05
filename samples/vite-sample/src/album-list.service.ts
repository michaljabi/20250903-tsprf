import { ajax } from "rxjs/internal/ajax/ajax";
import {filter, from, mergeMap, Subject, switchMap, tap} from "rxjs";

interface Album {
    id: number;
    userId: number;
    title: string;
}


export class AlbumListService {

    private inputText = new Subject<string>();
    private getAlbums() {
        return ajax.get<Album[]>('https://jsonplaceholder.typicode.com/albums');
    }

    searchInput(text: string) {
        this.inputText.next(text);
    }

    searchAlbum$(clearInput: () => void) {
        return this.inputText.pipe(
            tap(clearInput),
            switchMap((text) =>
                this.getAlbums()
                    .pipe(
                        mergeMap(({response}) => from(response)),
                        filter(album => album.title.toLowerCase().includes(text.toLowerCase())),
                    )
            ),

        )
    }
}