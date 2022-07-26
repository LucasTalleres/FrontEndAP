import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../model/usuario.model';

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {
  
  URL = 'https://aplucasgonzalez.herokuapp.com'
  
  constructor(private http: HttpClient) { }

  public getUser(): Observable<Usuario>{
    return this.http.get<Usuario>(this.URL + `/api/usuario/1`);
  }

  public updateUsuario(Usuario: Usuario): Observable<Usuario>{
    return this.http.put<Usuario>(this.URL + `/api/usuario/editar`, Usuario);
  }
}
