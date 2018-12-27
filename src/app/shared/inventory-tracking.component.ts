import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, of} from 'rxjs';
import {debounceTime, distinctUntilChanged, map, switchMap, catchError, tap} from 'rxjs/operators';

import { Company } from './model/company';
import { Size } from './model/size';

import { InventoryService } from '../shared/services/inventory.service';

const states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado',
  'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia', 'Florida', 'Georgia',
  'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
  'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
  'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
  'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island',
  'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia',
  'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

@Component({
	selector: 'app-inventory-tracking',
	templateUrl: './inventory-tracking.component.html',
	styleUrls: ['./inventory-tracking.component.scss']
})
export class InventoryTrackingComponent implements OnInit {
	@Input() parent: FormGroup;
	@Input() categories: string[];
	@Input() godowns: string[];

	searchFailed = false;
	searching = false;

	constructor(
		private InventoryService: InventoryService
	) { }

	get form() { return this.parent.controls; }

	ngOnInit() {
	}

	search = (text$: Observable<string>) =>
	text$.pipe(
		debounceTime(300),
		distinctUntilChanged(),
		tap(() => this.searching = true),
		switchMap(term =>
		  this.InventoryService.getSizes(term, term + '\uf8ff').pipe(
			map(val => {
				console.log('valll', val);
				return val;
			}),
			tap(() => this.searchFailed = false),
			catchError(() => {
			  this.searchFailed = true;
			  return of([]);
			}))
		),
		tap(() => this.searching = false)
	)

	formatter = (x: Size) => {
		return x.model;
	}

}
