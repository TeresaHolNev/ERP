import { Component, OnInit } from '@angular/core';
import { SesionService } from '../../servicios/sesion.service';
import { ActivatedRoute } from '@angular/router';
import { AutenticacionService } from '../../servicios/autenticacion.service';


@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.component.html',
  styleUrls: ['./sesion.component.css']
})
export class SesionComponent implements OnInit {
  

  sesion:any;
  sesiones:any;
  nombre:string;

  constructor(private sesionService: SesionService, 
              private autenticacionService: AutenticacionService,   
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.nombre = this.route.snapshot.params['nombre'];
    this.cargarSesiones();
  }

  crearSesion(){
    this.sesion = {
      nombre: this.autenticacionService.nombre,
      login: new Date()
    }
    this.sesionService.postSesion(this.sesion)
          .subscribe((resp:any)=>{
            console.log(resp);
          },(error)=>{
            console.log(error);
          })
  }

  cargarSesiones(){
    this.sesionService.getSesiones(this.nombre)
      .subscribe((res:any)=>{
        this.sesiones = res.sesiones;
        console.log(this.sesiones)
      },error =>{
        console.log(error);
      });
  }

  

}
