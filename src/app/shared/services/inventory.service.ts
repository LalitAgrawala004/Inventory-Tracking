import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';


import { Inventory } from '../../shared/model/inventory';
import { Size } from '../model/size';

@Injectable()
export class InventoryService {
	purchaseCollection: AngularFirestoreCollection<Inventory>;
	sizeCollection: AngularFirestoreCollection<Size>;

	constructor(private afs: AngularFirestore) {
		this.purchaseCollection = this.afs.collection('purchases', ref => ref.orderBy('purchaseDate', 'asc'));
		this.sizeCollection = this.afs.collection('sizes', ref => ref.orderBy('model'));
	}

	addItem(inventory: Inventory): void {
		//
		this.purchaseCollection.add(inventory);
	}

	addSize(size: Size): void {
		this.sizeCollection.add(size);
	}
}
