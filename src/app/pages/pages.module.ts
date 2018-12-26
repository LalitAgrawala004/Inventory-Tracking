import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { routes } from './pages.routes';

import { HomeComponent } from './home/home.component';
import { PurchaseComponent } from './purchase/purchase.component';

import { PurchaseService } from './purchase/purchase.service';
import { SalesComponent } from './sales/sales.component';
import { SizeComponent } from './size/size.component';

import { InventoryService } from '../shared/services/inventory.service';
@NgModule({
	declarations: [
		HomeComponent,
		PurchaseComponent,
		SalesComponent,
		SizeComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		RouterModule.forChild(routes),
		SharedModule
	],
	providers: [
		PurchaseService,
		InventoryService
	],
	bootstrap: []
})
export class PagesModule { }
