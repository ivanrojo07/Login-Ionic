import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Usuario } from '../../models/usuario-model/usuario-model';

@Injectable()
export class UsuarioService {
    public url: string;
    constructor(private _http: Http){
        this.url= 'http://localhost:3000/api/';
    }

    login(usuario: Usuario){
        let json= JSON.stringify(usuario);
        let params = json;

        let headers = new Headers({'Content-Type':'application/json'});


        return this._http.post(this.url+'login',params,{headers:headers}).map(res=>res.json());

    }

    addUsuario(usuario:Usuario){
        let json = JSON.stringify(usuario);
        let params = json;

        let headers = new Headers({'Content-Type':'application/json'});

        return this._http.post(this.url+'usuario',params,{headers:headers}).map(res=>res.json());
    }

}