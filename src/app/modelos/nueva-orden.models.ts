export class orden {
  nombreCombo: string = "";
  costo: number = 0;
  vendedor: string = "";
  cliente: string = "";
  fecha: Date = new Date();
  propina: number = 0;
  estado: boolean = false;

  constructor(
    nombreCombo: string = "",
    costo: number = 0,
    vendedor: string = "",
    cliente: string = "",
    fecha: Date = new Date(),
    propina: number = 0,
    estado: boolean = false
  ){
    this.nombreCombo = nombreCombo;
    this.costo = costo;
    this.vendedor = vendedor;
    this.cliente = cliente;
    this.fecha = fecha;
    this.propina = propina;
    this.estado = estado;
  }
}