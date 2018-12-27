import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
// import { map } from 'rxjs/operator';


import { Inventory } from '../../shared/model/inventory';
import { Size } from '../model/size';
import { Category } from '../model/category';
import { Godown } from '../model/godown';


@Injectable()
export class InventoryService {
	private purchaseCollection: AngularFirestoreCollection<Inventory>;
	private sizeCollection: AngularFirestoreCollection<Size>;
	private categoryCollection: AngularFirestoreCollection<Category>;
	private godownCollection: AngularFirestoreCollection<Category>;

	constructor(private afs: AngularFirestore) {
		this.purchaseCollection = this.afs.collection('purchases', ref => ref.orderBy('purchaseDate', 'asc'));
		this.sizeCollection = this.afs.collection('sizes', ref => ref.orderBy('model'));
		this.categoryCollection = this.afs.collection<Category>('categories', ref => ref.orderBy('name'));
		this.godownCollection = this.afs.collection<Godown>('godowns', ref => ref.orderBy('name'));
	}

	addPurchase(inventory: Inventory): void {
		//
		this.purchaseCollection.add(inventory);
	}

	addSize(size: Size): void {
		this.sizeCollection.add(size);
	}

	getSizes(start, end): Observable<any> {
		return this.afs.collection('sizes', ref =>
			ref
			.orderBy('model')
			.limit(5)
			.startAt(start)
			.endAt(start + '\uf8ff')
		).valueChanges();
	}

	get Categories$(): Observable<Category[]> {
		return this.categoryCollection.valueChanges();
	}

	get Godowns$(): Observable<Godown[]> {
		return this.godownCollection.valueChanges();
	}
}
