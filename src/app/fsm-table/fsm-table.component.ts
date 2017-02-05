import { Component, Input } from '@angular/core';
import { Router } from '@angular/router'

let $ = require('jquery');

@Component({
    styleUrls: ['./fsm-table.component.scss'],
    templateUrl: './fsm-table.component.html',
    selector: 'fsm-table',
})

export class FsmTableComponent {
    @Input() fsmtype: string;
    fsmTypeName: string;
    fsms: FsmEntry[] = [];
    router: Router;

    constructor(router: Router) {
        this.router = router;
    }

    ngOnInit() {
        this.fsmTypeName = this.fsmtype.toUpperCase();
        for (let i=0; i<15; i++) {
            this.fsms.push(new FsmEntry);
        }
    }

    sddcClick($event) {
        let id = $($event.currentTarget).children().first().text().replace(/\s/g, '');
        this.router.navigate(['/' + this.fsmtype, {id: id}]);
    }
}

class FsmEntry {
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
