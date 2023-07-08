import { Component } from '@angular/core';
import { Gif } from 'src/app/gifs/interfaces/Gifs.interfaces';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
    selector: 'shared-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
    constructor(private gifsService: GifsService) {}

    public get tags(): string[] {
        return this.gifsService.getTagHistory;
    }

    searchTag(tag: string) {
        this.gifsService.searchTag(tag);
    }
}
