import { Injectable } from "@angular/core";
import { DiaSemana } from "./dia-semana";

@Injectable({ providedIn: 'root' })
export class DiaSemanaService {
 
    public diasSemana: DiaSemana[] =
    [
        {id: 1, descricao: "Segunda-Feira"}
    ]

    constructor() { }

    
}