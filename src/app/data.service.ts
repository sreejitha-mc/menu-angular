import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    private REST_API_SERVER = 'http://localhost:4100/';

    constructor(private httpClient: HttpClient) { }

    public getMenuList(id?: string): Observable<any> {
        return this.httpClient.get(`${this.REST_API_SERVER}menu?${id ? `parent_id=${id}` : ``}`);
    }
}
