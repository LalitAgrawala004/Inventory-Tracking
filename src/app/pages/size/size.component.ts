import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Size } from '../../shared/model/size';

import { InventoryService } from '../../shared/services/inventory.service';

@Component({
	selector: 'app-size',
	templateUrl: './size.component.html',
	styleUrls: ['./size.component.scss']
})
export class SizeComponent implements OnInit {
	sizeForm: FormGroup;
	size: Size = new Size();

	constructor(
		private formBuilder: FormBuilder,
		private inventoryService: InventoryService
	) {
	}

	ngOnInit() {
		this.sizeForm = this.createSizeFormGroup(this.formBuilder);
	}

	private createSizeFormGroup(formBuilder: FormBuilder): FormGroup {
		return formBuilder.group({
			// tslint:disable-next-line:max-line-length
			model: [this.size.model],
			size: [this.size.size],
			company: [this.size.company],
		});
	}

	addSize(): void {
		if (this.sizeForm.invalid) {
			return;
		}
		this.inventoryService.addSize(this.sizeForm.value);
	}

}
