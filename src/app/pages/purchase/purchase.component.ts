import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';

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
		private flashMessage: FlashMessagesService,
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
			category: [this.purchase.category, Validators.required],
			godown: [this.purchase.godown, Validators.required],
			purchaseDate: [this.purchase.purchaseDate, Validators.required],
			slipNumber: [this.purchase.slipNumber, Validators.required],
			model: [this.purchase.model, Validators.required],
			size: [{value: this.purchase.size, disabled: true}, Validators.required],
			company: [{value: this.purchase.company, disabled: true}, Validators.required],
			quantity: [this.purchase.quantity, Validators.required],
			salesman: [this.purchase.salesman, Validators.required],
			batchNumber: [this.purchase.batchNumber, Validators.required]
		});
	}

	save(): void {
		if (this.purchaseForm.invalid) {
			return;
		}
		this.inventoryService.addPurchase(this.purchaseForm.value);
		this.flashMessage.show('Purchase Addedng', {
			cssClass: 'alert-success', timeout: 4000
		  });
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
