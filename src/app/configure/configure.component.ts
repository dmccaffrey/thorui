/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, Input } from "@angular/core";

@Component({
    styleUrls: ['./configure.component.scss'],
    templateUrl: './configure.component.html',
})

export class ConfigureComponent {
    @Input() model: RceConfiguration = new RceConfiguration();

    constructor() {
    }

    ngOnInit() {
        let data = {
            "key": "value"
        }
        this.model.config = JSON.stringify(data, null, 4);
    }

    reloadConfig() {
        console.log(this.model.config);
        console.log("Reload Configuration");
    }

    onSubmit() {
        console.log("Submitted " + this.model.config);
    }
}

class RceConfiguration {
    config: string;
}
