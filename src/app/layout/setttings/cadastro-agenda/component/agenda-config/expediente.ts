export class Expediente {
    id: number;
    inicioManha: string;
    fimManha: string;
    inicioTarde: string;
    fimTarde: string;
    diaSemana: number;
    atendendo: boolean;
    constructor(id: number, inicioManha: string, fimManha: string, inicioTarde: string, fimTarde: string, diaSemana: number, atendendo: boolean) {
        this.id = id;
        this.inicioManha = inicioManha;
        this.fimManha = fimManha;
        this.inicioTarde = inicioTarde;
        this.fimTarde = fimTarde;
        this.diaSemana = diaSemana;
        this.atendendo = atendendo;
    }
}