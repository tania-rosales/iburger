export class combo {
  nombreCombo: string = "";
  costo: number = 0;
  fecha: Date = new Date();
  descripcion: string = "";
  estado: boolean = true;

  constructor(
    nombreCombo: string = "",
    costo: number = 0,
    fecha: Date = new Date(),
    descripcion: string = "",
    estado: boolean = true
  ){
    this.nombreCombo = nombreCombo;
    this.costo = costo;
    this.fecha = fecha;
    this.descripcion = descripcion;
    this.estado = estado;
  }
}