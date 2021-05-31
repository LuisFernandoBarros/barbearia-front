export class Dashboard {
    id: string;
    totalClientes: number;

    constructor(id: string, totalClientes: number){
        this.id = id;
        this.totalClientes = totalClientes;
    }
}