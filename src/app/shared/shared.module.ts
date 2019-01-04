import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { InventoryTrackingComponent } from './inventory-tracking.component';

import { SizeService } from '../shared/services/size.service';
import { SpinnerComponent } from './ui/spinner/spinner.component';

@NgModule({
	declarations: [
		InventoryTrackingComponent,
		SpinnerComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		NgbModule
	],
	providers: [
		SizeService
	],
	bootstrap: [],
	exports: [
		InventoryTrackingComponent,
		SpinnerComponent
	],
})
export class SharedModule { }
