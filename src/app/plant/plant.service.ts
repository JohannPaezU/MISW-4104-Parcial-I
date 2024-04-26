import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Plant } from './plant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlantService {
  private apiUrl: string = environment.baseUrl;

  constructor(private httpClient: HttpClient) { }

  getPlants(): Observable<Plant[]> {
    return this.httpClient.get<Plant[]>(this.apiUrl);
  }
}