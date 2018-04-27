import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from '../servicios/autenticacion.service';
import { SesionService } from '../servicios/sesion.service';


@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  sesion:any;

  constructor(private autenticacionService: AutenticacionService,private sesionService: SesionService) { }

  ngOnInit() {
  }

  getLogged(){
    return this.autenticacionService.isLogged();
  }

  cerrarSesion(){
    this.sesion = {
      nombre: this.autenticacionService.nombre,
      logout: new Date
    }
    this.sesionService.postSesion(this.sesion)
        .subscribe((res:any)=>{
          console.log(res);
        },error=>{
          console.log(error);
        })
  }

}
