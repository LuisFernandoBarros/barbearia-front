export class Servico {
    id: number;
    nome: string;
    tempo: number;
    valor: number;
    
    constructor(id: number, nome: string, tempo: number, valor: number){
        this.id = id;
        this.nome = nome;
        this.tempo = tempo;
        this.valor = valor;        
    }
}