import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

import { Size } from '../model/size';

@Injectable()
export class SizeService {
	sizeCollection: AngularFirestoreCollection<Size>;

	constructor(private afs: AngularFirestore) {
		this.sizeCollection = this.afs.collection('sizes', ref => ref.orderBy('model'));
	}

	addSize(size: Size): void {
		this.sizeCollection.add(size);
	}
}
