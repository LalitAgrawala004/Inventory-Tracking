import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Company } from '../../shared/model/company';


import { PurchaseService } from './purchase.service';

@Component({
	selector: 'app-purchase',
	templateUrl: './purchase.component.html',
	styleUrls: ['./purchase.component.scss']
})
export class PurchaseComponent implements OnInit {

	purchaseForm: FormGroup;
	purchase: any = {};

	categories: string[] = [
		'Wall', 'Floor', 'Granite', 'Sanitary', 'Others'
	];

	godowns: string[] = [
		'Godown1', 'Godown2'
	];


	constructor(
		private formBuilder: FormBuilder,
		private purchaseService: PurchaseService
	) {
	}

	ngOnInit() {
		this.purchaseForm = this.createPurchaseFormGroup(this.formBuilder);

		this.purchaseForm.valueChanges.subscribe(val => {
			console.log('kjkjewlk', val);
		});
	}

	private createPurchaseFormGroup(formBuilder: FormBuilder): FormGroup {
		return formBuilder.group({
			// tslint:disable-next-line:max-line-length
			category: [this.purchase.category],
			godown: [this.purchase.godown],
			purchaseDate: [this.purchase.purchaseDate],
			slipNumber: [this.purchase.slipNumber],
			model: [this.purchase.model],
			size: [this.purchase.size],
			company: [this.purchase.company],
			quantity: [this.purchase.quantity],
			salesman: [this.purchase.salesman],
			batchNumber: [this.purchase.batchNumber]
		});
	}

	save(): void {
		if (this.purchaseForm.invalid) {
			return;
		}
		this.purchaseService.addItem(this.purchaseForm.value);
	}

}
