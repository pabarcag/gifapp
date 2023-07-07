import { Injectable } from '@angular/core';
@Injectable({ providedIn: 'root' })
export class GifsService {
    constructor() {}

    private gyphyAPIKey = 'MYTnVkK1UOCwEZ5LMVyE37bxwIy26a2P';

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
        // this._tagHistory.unshift(tag);
    }
}
