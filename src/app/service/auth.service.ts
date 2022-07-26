import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtDto } from '../model/jwt-dto';
import { LoginUsuario } from '../model/login-usuario';
import { NuevoUsuario } from '../model/nuevo-usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiServerUrl='https://aplucasgonzalez.herokuapp.com';

  constructor(private httpClient:HttpClient) { }

  public nuevo(nuevoUsuario: NuevoUsuario): Observable<any>{
    return this.httpClient.post<any>(`${this.apiServerUrl}/auth/nuevo`, nuevoUsuario);
  }

  public login(loginUsuario: LoginUsuario): Observable<JwtDto> {
    return this.httpClient.post<JwtDto>(`${this.apiServerUrl}/auth/login`, loginUsuario);
   }
}
