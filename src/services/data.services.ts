import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Componente } from '../app/interfaces/interfaces';



@Injectable({
    providedIn: 'root'
})

export class DataService {
    constructor(private http:HttpClient) {}

    getMenuOpts(){
        return this.http.get<Componente[]>('/assets/data/menu-opts.json');    
    }
}