import { Component } from '@angular/core';

import * as $ from 'jquery';
import 'jcanvas';

@Component({
    template: '<canvas id="thor-canvas"></canvas>',
    selector: 'thor-diagram'
})

export class DiagramComponent {
    constructor() {
        let $canvas = $("#thor-canvas");
    }
}
