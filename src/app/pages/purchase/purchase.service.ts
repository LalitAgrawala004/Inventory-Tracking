import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';


import { Inventory } from '../../shared/model/inventory';

@Injectable()
export class PurchaseService {
	inventoryCollection: AngularFirestoreCollection<Inventory>;

	constructor(private afs: AngularFirestore) {
		this.inventoryCollection = this.afs.collection('purchases', ref => ref.orderBy('purchaseDate', 'asc'));
	  }

	addItem(inventory: Inventory): void {
		//
		this.inventoryCollection.add(inventory);
	}
}
