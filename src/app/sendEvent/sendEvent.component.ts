import { Component } from '@angular/core';

@Component({
    templateUrl: './sendEvent.component.html',
    selector: 'thor-send-event'
})

export class SendEventComponent {
    events: string[] = ["VALIDATE", "START", "CANCEL"];

    constructor() {
    }
}
