import { Injectable } from "@angular/core";
import { DiaSemana } from "./dia-semana";

@Injectable({ providedIn: 'root' })
export class DiaSemanaService {
 
    public diasSemana: DiaSemana[] =
    [
        {id: 0, descricao: "Domingo"},
        {id: 1, descricao: "Segunda-Feira"},
        {id: 2, descricao: "Terça-Feira"},
        {id: 3, descricao: "Quarta-Feira"},
        {id: 4, descricao: "Quinta-Feira"},
        {id: 5, descricao: "Sexta-Feira"},
        {id: 6, descricao: "Sábado"},
    ]

    constructor() { }

    
}