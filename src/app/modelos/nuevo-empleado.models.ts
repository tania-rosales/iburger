export class empleado {
  nombreEmpleado: string = "";
  apellidoEmpleado: string = "";
  cargo: string = "";
  salario: number;
  fechaNacimiento: Date = new Date();
  sexo: string = "";
  estado: boolean = true;

  constructor(
  nombreEmpleado: string = "",
  apellidoEmpleado: string = "",
  cargo: string = "",
  salario: number,
  fechaNacimiento: Date = new Date(),
  sexo: string = "",
  estado: boolean = true
  ){
    this.nombreEmpleado = nombreEmpleado;
    this.apellidoEmpleado = apellidoEmpleado;
    this.cargo = cargo;
    this.salario = salario;
    this.fechaNacimiento = fechaNacimiento;
    this.sexo = sexo;
    this.estado = estado;
  }
}