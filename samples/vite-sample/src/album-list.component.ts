import {AlbumListService} from "./album-list.service.ts";


export class AlbumListComponent extends HTMLUListElement {

    constructor(albumListService: AlbumListService) {
        super()
        this.className = 'list-group';

        albumListService.searchAlbum$(() => {
            this.innerHTML = '';
        }).subscribe(album => {
            const li = document.createElement('li');
            li.className = 'list-group-item';
            li.innerHTML = album.title;
            this.append(li);
        })
    }
}

customElements.define('album-list-component', AlbumListComponent, { extends: 'ul' });