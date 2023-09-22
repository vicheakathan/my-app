import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const API_URL = environment.api_url;

@Injectable()
export class API {

    constructor(private http: HttpClient) { }

    getData() {
        return this.http.get<any[]>(API_URL + "all?fields=name,flags,cca2,cca3,altSpellings,idd")
        .toPromise()
        .then(res => <any[]>res)
        .then(data => { return data; });
    }
}