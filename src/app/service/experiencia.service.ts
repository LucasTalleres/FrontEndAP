import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  private apiServerUrl='https://aplucasgonzalez.herokuapp.com';

  constructor(private http:HttpClient) { }

  public obtenerExperiencias():Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(`${this.apiServerUrl}/api/experiencia`);
  }
  public addExperiencia(experiencia: Experiencia):Observable<Experiencia>{
    return this.http.post<Experiencia>(`${this.apiServerUrl}/api/experiencia`, experiencia);
  }
  public editarExperiencia(experiencia: Experiencia):Observable<Experiencia>{
    return this.http.put<Experiencia>(`${this.apiServerUrl}/api/experiencia`, experiencia);
  }
  public borrarExperiencia(idExperiencia: number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/api/experiencia/${idExperiencia}`);
  }
}
