import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MiservicioService {
  private url = environment.urlpaises;

  constructor(private http: HttpClient) { }

  public obtenerPaises(){
    return this.http.get(this.url);
  }
}
