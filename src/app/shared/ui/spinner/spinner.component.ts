import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-spinner',
	templateUrl: './spinner.component.html',
	styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

	@Input() public size: string;


	constructor() { }

	ngOnInit() {
		this.size = this.size || 'small';
	}

}
