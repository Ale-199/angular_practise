import { Injectable } from "@angular/core";
import { Inventory } from "./inventory.model";
import { RestDataSource } from "./rest.datasource";

@Injectable()
export class InventoryRepository {

    private inventory: Inventory[] = [];

    constructor(private dataSource: RestDataSource) {
        dataSource.getInventoryList().subscribe(data => {
            this.inventory = data;
        });
    }

    getInventory(): Inventory[] {
        return this.inventory;
    }

    getItem(id: string): Inventory {
        return (this.inventory.find(item => item._id === id)!);
    }

}