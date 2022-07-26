import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyectos } from '../model/proyecto.model';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  private apiServerUrl='https://aplucasgonzalez.herokuapp.com';

  constructor(private http:HttpClient) { }

  public obtenerProyectos():Observable<Proyectos[]>{
    return this.http.get<Proyectos[]>(`${this.apiServerUrl}/api/proyectos/traer`);
  }
  public addProyectos(proyectos: Proyectos):Observable<Proyectos>{
    return this.http.post<Proyectos>(`${this.apiServerUrl}/api/proyectos/agregar`, proyectos)
  }
  public editarProyectos(proyectos: Proyectos):Observable<Proyectos>{
    return this.http.put<Proyectos>(`${this.apiServerUrl}/api/proyectos/editar`, proyectos);
  }
  public borrarProyectos(idProyecto: number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/api/proyectos/borrar/${idProyecto}`);
  }
}
