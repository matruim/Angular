import { TestBed, inject } from '@angular/core/testing';

import { ServerComponent } from './server.component';

describe('a server component', () => {
	let component: ServerComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				ServerComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([ServerComponent], (ServerComponent) => {
		component = ServerComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});