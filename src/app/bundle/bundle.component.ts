import { Component } from '@angular/core';
import { Router } from '@angular/router'

let $ = require('jquery');

@Component({
    styleUrls: ['./bundle.component.scss'],
    templateUrl: './bundle.component.html'
})

export class BundleComponent {
    sddcFsms: SddcFsm[] = [];
    router: Router;

    constructor(router: Router) {
        this.router = router;
    }

    ngOnInit() {
        for (let i=0; i<15; i++) {
            this.sddcFsms.push(new SddcFsm);
        }
    }

    sddcClick($event) {
        let id = $($event.currentTarget).children().first().text();
        this.router.navigate(['/sddc', {id: id}]);
    }
}

class SddcFsm {
    id: string;
    state: string;
    creation: Date;

    constructor() {
        this.id = String(Math.floor(Math.random() * 1000));
        let states = ["NEW", "BACKING_UP", "PROCESSING", "COMPLETED", "CANCELD"];
        this.state = states[Math.floor(Math.random() * states.length)];
        this.creation = new Date();
    }
}
