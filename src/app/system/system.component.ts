/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';
import { Router } from '@angular/router'

let $ = require('jquery');

@Component({
    styleUrls: ['./system.component.scss'],
    templateUrl: './system.component.html'
})

export class SystemComponent {
    bundleFsms: BundleFsm[] = [];
    sddcFsms: SddcFsm[] = [];
    router: Router;

    constructor(router: Router) {
        this.router = router;
    }

    ngOnInit() {
        for (let i=0; i<15; i++) {
            this.bundleFsms.push(new BundleFsm);
        }
        for (let i=0; i<15; i++) {
            this.sddcFsms.push(new SddcFsm);
        }
    }

    bundleClick($event) {
        let id = $($event.currentTarget).children().first().text();
        this.router.navigate(['/bundle', {id: id}]);
    }

    sddcClick($event) {
        let id = $($event.currentTarget).children().first().text();
        this.router.navigate(['/sddc', {id: id}]);
    }
}

class BundleFsm {
    id: string;
    state: string;
    creation: Date;

    constructor() {
        this.id = String(Math.floor(Math.random() * 1000));
        let states = ["NEW", "PROCESSING", "COMPLETED"];
        this.state = states[Math.floor(Math.random() * states.length)];
        this.creation = new Date();
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
