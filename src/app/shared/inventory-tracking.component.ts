import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Company } from './model/company';
import { Size } from './model/size';

@Component({
	selector: 'app-inventory-tracking',
	templateUrl: './inventory-tracking.component.html',
	styleUrls: ['./inventory-tracking.component.scss']
})
export class InventoryTrackingComponent implements OnInit {
	@Input() parent: FormGroup;
	@Input() categories: string[];
	@Input() godowns: string[];


	constructor() { }

	get form() { return this.parent.controls; }

	ngOnInit() {
	}

}
