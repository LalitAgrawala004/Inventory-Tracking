import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PurchaseComponent } from './purchase/purchase.component';


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
		path: '',
		redirectTo: '/home',
		pathMatch: 'full'
	}
];
