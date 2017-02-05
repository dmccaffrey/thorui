import { Component } from '@angular/core';

import * as $ from 'jquery';

@Component({
    templateUrl: './fsm-context.component.html',
    selector: 'thor-context'
})

export class FsmContextComponent {
    history: HistoryPair[] = [];
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

        for (let i=0; i<data.stateHistory.length; i++) {
            if (i == 0) {
                this.history.push(new HistoryPair("CREATE", data.stateHistory[i]));
            } else {
                this.history.push(new HistoryPair(data.eventHistory[i-1], data.stateHistory[i]));
            }
        }

        this.currentState = data.currentState;
        this.rawContext = JSON.stringify(data, null, 4);
    }
}

class HistoryPair {
    event: string;
    state: string;

    constructor(event: string, state: string) {
        this.event = event;
        this.state = state;
    }
}
