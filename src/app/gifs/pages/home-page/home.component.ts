import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/Gifs.interfaces';

@Component({
    selector: 'gifs-home-pages',
    templateUrl: './home-page.component.html',
})
export class HomePageComponent {
    constructor(private Gifservice: GifsService) {}

    get gifs(): Gif[] {
        return this.Gifservice.gifList;
    }
}
