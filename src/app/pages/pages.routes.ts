import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { SalesComponent } from './sales/sales.component';
import { SizeComponent } from './size/size.component';


export const routes: Routes = [
	{
		path: 'home',
		component: HomeComponent
	},
	{
		path: 'purchase',
		component: PurchaseComponent
	},
	{
		path: 'sales',
		component: SalesComponent
	},
	{
		path: 'size',
		component: SizeComponent
	},
	{
		path: '',
		redirectTo: '/home',
		pathMatch: 'full'
	}
];
