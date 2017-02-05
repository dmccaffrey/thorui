import { Component } from '@angular/core';
import { Router } from '@angular/router'

let $ = require('jquery');

@Component({
    styleUrls: ['./sddc.component.scss'],
    templateUrl: './sddc.component.html'
})

export class SddcComponent {
    router: Router;

    constructor(router: Router) {
        this.router = router;
    }

    ngOnInit() {
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
