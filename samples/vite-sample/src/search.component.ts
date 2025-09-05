import { fromEvent, map} from "rxjs";
import {AlbumListService} from "./album-list.service.ts";

export class SearchComponent extends HTMLElement {

    private textInput = document.createElement('input');

    inputText$ =
        fromEvent(this.textInput, 'input')
            .pipe(map(e => (e?.target as HTMLInputElement).value));

    constructor(albumListService: AlbumListService) {
        super();
        this.className = 'input-group mb-3';
        this.innerHTML = `<span class="input-group-text">🔎</span>`
        this.textInput.className = 'form-control';
        this.textInput.setAttribute('placeholder', 'wyszukaj');
        this.append(this.textInput);
        this.inputText$.subscribe(text => albumListService.searchInput(text))
    }
}

customElements.define('search-component', SearchComponent);