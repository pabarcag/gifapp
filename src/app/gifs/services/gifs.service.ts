import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({ providedIn: 'root' })
export class GifsService {
    constructor(private http: HttpClient) {}

    private gyphyAPIKey = 'MYTnVkK1UOCwEZ5LMVyE37bxwIy26a2P';
    private serviceUrl = 'https://api.giphy.com/v1/gifs';
    private _tagHistory: string[] = [];

    get getTagHistory(): string[] {
        return [...this._tagHistory];
    }

    // organizar el historial para eliminar dupliados

    private organizeHistory(tag: string) {
        tag = tag.toLowerCase();
        if (this._tagHistory.includes(tag)) {
            this._tagHistory = this._tagHistory.filter(
                (oldTag) => oldTag !== tag
            );
        }

        this._tagHistory.unshift(tag);
        this._tagHistory = this._tagHistory.splice(0, 10);
    }

    searchTag(tag: string): void {
        if (tag.length === 0) return;
        this.organizeHistory(tag);

        const params = new HttpParams()
            .set('api_key', this.gyphyAPIKey)
            .set('limit', '10')
            .set('q', tag);

        this.http
            .get(`${this.serviceUrl}/search`, { params })
            .subscribe((res) => console.log(res));
    }
}
