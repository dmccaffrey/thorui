import { Component } from '@angular/core';

@Component({
    templateUrl: './send-event.component.html',
    selector: 'thor-send-event'
})

export class SendEventComponent {
    events: string[] = ["VALIDATE", "START", "CANCEL"];

    constructor() {
    }
}
