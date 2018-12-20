import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Company } from './model/company';
import { Size } from './model/size';

@Component({
	selector: 'app-inventory-tracking',
	templateUrl: './inventory-tracking.component.html',
	styleUrls: ['./inventory-tracking.component.scss']
})
export class InventoryTrackingComponent implements OnInit {

	inventoryForm: FormGroup;
	inventory: any = {};

	sizes: Size[] = [
		{
			id: '1',
			name: '16 * 16'
		},
		{
			id: '2',
			name: '32  * 32'
		}
	];

	companies: Company[] = [
		{
			id: '1',
			name: 'Johnson 1'
		},
		{
			id: '2',
			name: 'Johnson 2'
		}
	];

	constructor(
		private formBuilder: FormBuilder
	) {
	}

	get form() { return this.inventoryForm.controls; }

	ngOnInit() {
		this.inventoryForm = this.createInventoryFormGroup(this.formBuilder);
	}

	private createInventoryFormGroup(formBuilder: FormBuilder): FormGroup {
		return formBuilder.group({
			// tslint:disable-next-line:max-line-length
			dob: [this.inventory.dob, [Validators.pattern('(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))')]],
			supplier: [this.inventory.supplier],
			model: [this.inventory.model],
			size: [this.sizes[0]],
			company: [this.companies[0]],
			quantity: [this.inventory.quantity],
			salesman: [this.inventory.salesman]
		});
	}

}
