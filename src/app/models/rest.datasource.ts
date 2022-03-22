import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Inventory } from "./inventory.model";

const PROTOCOL = "http";
const PORT = 3000;

@Injectable()
export class RestDataSource {

    baseUrl: string;

    constructor(private http: HttpClient) {
        this.baseUrl = 'https://comp229w2022s002.herokuapp.com/';
    }

    getInventoryList(): Observable<Inventory[]> {
        return this.http.get<Inventory[]>(this.baseUrl + "inventory/list");
    }
}
