import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
	{
		path: 'home',
		component: HomeComponent
	},
	{
		path: '',
		redirectTo: '/home',
		pathMatch: 'full'
	}
	// { path: '**', component: PageNotFoundComponent }

];

@NgModule({
	imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
	exports: [RouterModule]
})
export class AppRoutingModule { }
