import { Component } from '@angular/core';

import * as $ from 'jquery';

@Component({
    templateUrl: './context.component.html',
    selector: 'thor-context'
})

export class ContextComponent {
    stateHistory: string[];
    eventHistory: string[];
    currentState: string;
    rawContext: string;

    constructor() {
        let data = {
            "currentState": "Processing",
            "stateHistory": ["NEW", "VALID", "PROCESSING"],
            "eventHistory": ["VALIDATE", "START"],
            "data": {
                "testKey": "testValue"
            }
        }

        this.stateHistory = data.stateHistory;
        this.eventHistory = data.eventHistory;
        this.currentState = data.currentState;
        this.rawContext = JSON.stringify(data, null, 4);
    }
}
