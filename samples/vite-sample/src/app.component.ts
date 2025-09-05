import {SearchComponent} from "./search.component.ts";
import {AlbumListComponent} from "./album-list.component.ts";
import {AlbumListService} from "./album-list.service.ts";

export class AppComponent extends HTMLElement {


    private albumListService = new AlbumListService();
    private searchBar = new SearchComponent(this.albumListService);
    private albumList = new AlbumListComponent(this.albumListService);

    constructor() {
        super();
        this.dataset.bsTheme = 'dark';
        this.className = 'd-block p-5 bg-body-tertiary text-white min-vh-100'
        this.append(
            this.searchBar,
            this.albumList
        )
    }
}

customElements.define('app-component', AppComponent);