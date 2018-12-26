import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Inventory } from '../../shared/model/inventory';


@Component({
	selector: 'app-sales',
	templateUrl: './sales.component.html',
	styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {

	salesForm: FormGroup;
	sale: Inventory = {};

	categories: string[] = [
		'Wall', 'Floor', 'Granite', 'Sanitary', 'Others'
	];

	godowns: string[] = [
		'Godown1', 'Godown2'
	];

	constructor(
		private formBuilder: FormBuilder
	) {
	}

	ngOnInit() {
		this.salesForm = this.createSalesFormGroup(this.formBuilder);
	}

	private createSalesFormGroup(formBuilder: FormBuilder): FormGroup {
		return formBuilder.group({
			// tslint:disable-next-line:max-line-length
			category: [this.sale.category],
			godown: [this.sale.godown],
			saleDate: [this.sale.saleDate],
			slipNumber: [this.sale.slipNumber],
			model: [this.sale.model],
			size: [this.sale.size],
			company: [this.sale.company],
			quantity: [this.sale.quantity],
			salesman: [this.sale.salesman],
			customer: [this.sale.customer],
			batchNumber: [this.sale.batchNumber]
		});
	}

}
