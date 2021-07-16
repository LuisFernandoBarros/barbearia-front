import { Injectable } from "@angular/core";
import { DiaSemana } from "./dia-semana";

@Injectable({ providedIn: 'root' })
export class DiaSemanaService {
 
    public diasSemana: DiaSemana[] =
    [
        {id: 1, descricao: "Domingo"},
        {id: 2, descricao: "Segunda-Feira"},
        {id: 3, descricao: "Terça-Feira"},
        {id: 4, descricao: "Quarta-Feira"},
        {id: 5, descricao: "Quinta-Feira"},
        {id: 6, descricao: "Sexta-Feira"},
        {id: 7, descricao: "Sábado"},
    ]

    constructor() { }

    
}