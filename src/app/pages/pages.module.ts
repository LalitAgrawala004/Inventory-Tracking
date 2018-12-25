import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { routes } from './pages.routes';

import { HomeComponent } from './home/home.component';
import { PurchaseComponent } from './purchase/purchase.component';

import { PurchaseService } from './purchase/purchase.service';
import { SalesComponent } from './sales/sales.component';

@NgModule({
	declarations: [
		HomeComponent,
		PurchaseComponent,
		SalesComponent
	],
	imports: [
		BrowserModule,
		RouterModule.forChild(routes),
		SharedModule
	],
	providers: [
		PurchaseService
	],
	bootstrap: []
})
export class PagesModule { }
