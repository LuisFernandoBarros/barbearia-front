import { Injectable } from "@angular/core";


@Injectable({ providedIn: 'root' })
export class ResolutionService {

    constructor() { }

    public isMobile(): boolean {
        return window.screen.width === 360;
    }
}