import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skills } from '../model/skills.model';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  private apiServerUrl='https://aplucasgonzalez.herokuapp.com';

  constructor(private http:HttpClient) { }
  
  public obtenerSkills():Observable<Skills[]>{
    return this.http.get<Skills[]>(`${this.apiServerUrl}/api/skills`);
  }

  public addSkills(skills: Skills):Observable<Skills>{
    return this.http.post<Skills>(`${this.apiServerUrl}/api/skills`, skills);
  }

  public editarSkills(skills: Skills):Observable<Skills>{
    return this.http.put<Skills>(`${this.apiServerUrl}/api/skills`, skills);
  }

  public borrarSkills(idSkills: number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/api/skills/${idSkills}`);
  }

}
