export class Horario {
    id: number;
    inicioManha: string;
    fimManha: string;
    inicioTarde: string;
    fimTarde: string;
    diaSemana: number;
    constructor(id: number, inicioManha: string, fimManha: string, inicioTarde: string, fimTarde: string, diaSemana: number) {
        this.id = id;
        this.inicioManha = inicioManha;
        this.fimManha = fimManha;
        this.inicioTarde = inicioTarde;
        this.fimTarde = fimTarde;
        this.diaSemana = diaSemana;
    }
}