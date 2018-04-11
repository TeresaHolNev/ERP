import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ProveedoresService {

  constructor(private http: HttpClient) { }


  getProveedores(){
    let url = 'http://localhost:3000/proveedor' //Ip y dirección o diminio del proyecto
    return this.http.get(url) //Cuendo llamememos a get proveedores ejecuta la opción get, y devuelve la dirección
          .map((resp:any) => {   //En map recibimos la respuesta
            return resp;
          }) 
  }

  getProveedorId(id){
    let url = 'http://localhost:3000/proveedor/'//Le añadimos la barra al final para que pege el ID y cree la ruta completa
    return this.http.get(url + id)
          .map((resp:any) => {   //En map recibimos la respuesta
            return resp;
          })
  }

  postProveedor(proveedor){
    let url = 'http://localhost:3000/proveedor';
    return this.http.post(url, proveedor)
        .map((resp:any) => {   //En map recibimos la respuesta
          console.log(resp);
          return resp;
        }) 
  }

  putProveedor(id, proveedor){
    let url = 'http://localhost:3000/proveedor/';
    return this.http.put(url+id, proveedor)
        .map((resp:any) => {   //En map recibimos la respuesta
          console.log(resp);
          return resp;
    }) 
  }

  deleteProveedor(id){
    let url = 'http://localhost:3000/proveedor/';
      return this.http.delete(url+id) 
      .map((resp:any) => {   //En map recibimos la respuesta
        console.log(resp);
        return resp;
      })    
  }

}

