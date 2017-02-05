/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from "@angular/core";

@Component({
    styleUrls: ['./deploy.component.scss'],
    templateUrl: './deploy.component.html',
})

export class DeployComponent {
    bundles: Bundle[] = [];
    sddcs: Sddc[] = [];
    selectedBundle: string[] = [];
    selectedSDDC: string[] = [];

    ngOnInit() {
        for (let i=0; i<15; i++) {
            this.bundles.push(new Bundle());
        }
        for (let i=0; i<15; i++) {
            this.sddcs.push(new Sddc());
        }
    }
}

class Bundle {
    id: string;
    description: string;
    creation: Date;

    constructor() {
        this.id = String(Math.floor(Math.random() * 1000));
        this.description = "Test bundle";
        this.creation = new Date();
    }
}

class Sddc {
    id: string;
    tennantId: string;
    version: number;

    constructor() {
        this.id = String(Math.floor(Math.random() * 1000));
        this.tennantId = String(Math.floor(Math.random() * 1000));
        this.version = 6.0;
    }
}
