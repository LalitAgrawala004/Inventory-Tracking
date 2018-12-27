import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Size } from '../../shared/model/size';

import { InventoryService } from '../../shared/services/inventory.service';
import { Godown } from '../../shared/model/godown';
import { Category } from 'src/app/shared/model/category';

@Component({
	selector: 'app-purchase',
	templateUrl: './purchase.component.html',
	styleUrls: ['./purchase.component.scss']
})
export class PurchaseComponent implements OnInit {

	purchaseForm: FormGroup;
	purchase: any = {};

	categories: Category[];
	godowns: Godown[];


	constructor(
		private formBuilder: FormBuilder,
		private inventoryService: InventoryService
	) {
	}

	ngOnInit() {
		this.purchaseForm = this.createPurchaseFormGroup(this.formBuilder);

		this.purchaseForm.valueChanges.subscribe(val => {
			console.log('kjkjewlk', val);
		});

		this.purchaseForm.get('model').valueChanges.subscribe(val => {
			if (typeof val === 'string') {
				this.setSizeValues(undefined);
				return;
			}
			this.setSizeValues(val);
		});

		this.inventoryService.Godowns$.subscribe(val => this.godowns = val);
		this.inventoryService.Categories$.subscribe(val => this.categories = val);
	}

	private createPurchaseFormGroup(formBuilder: FormBuilder): FormGroup {
		return formBuilder.group({
			// tslint:disable-next-line:max-line-length
			category: [this.purchase.category],
			godown: [this.purchase.godown],
			purchaseDate: [this.purchase.purchaseDate],
			slipNumber: [this.purchase.slipNumber],
			model: [this.purchase.model],
			size: [{value: this.purchase.size, disabled: true}],
			company: [{value: this.purchase.company, disabled: true}],
			quantity: [this.purchase.quantity],
			salesman: [this.purchase.salesman],
			batchNumber: [this.purchase.batchNumber]
		});
	}

	save(): void {
		if (this.purchaseForm.invalid) {
			return;
		}
		this.inventoryService.addPurchase(this.purchaseForm.value);
	}

	private setSizeValues(value: Size): void {
		if (!value) {
			this.purchaseForm.controls['size'].setValue('');
			this.purchaseForm.controls['company'].setValue('');
			return;
		}
		this.purchaseForm.controls['size'].setValue(value.size);
		this.purchaseForm.controls['company'].setValue(value.company);
	}

}
