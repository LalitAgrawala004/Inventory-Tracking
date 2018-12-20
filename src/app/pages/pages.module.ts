import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { routes } from './pages.routes';

import { HomeComponent } from './home/home.component';
import { PurchaseComponent } from './purchase/purchase.component';

@NgModule({
	declarations: [
		HomeComponent,
		PurchaseComponent
	],
	imports: [
		BrowserModule,
		RouterModule.forChild(routes),
		SharedModule
	],
	providers: [],
	bootstrap: []
})
export class PagesModule { }
