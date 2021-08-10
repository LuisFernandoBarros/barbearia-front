import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";

@Injectable({ providedIn: 'root' })
export class ImageLogoService {

    constructor() { }

    urlLogo(logo: string): string {
        return `${environment.URL_LOGO_FOLDER}/${logo}.png`        
    }
}