/* tslint:disable:no-unused-variable */

import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DeployComponent } from "./deploy/deploy.component";
import { OverviewComponent } from "./overview/overview.component";
import { BundleComponent } from "./bundle/bundle.component";
import { FsmContextComponent } from "./fsm-context/fsm-context.component";
import { SendEventComponent } from "./send-event/send-event.component";
import { ConfigureComponent } from "./configure/configure.component";
import { ClarityModule } from "clarity-angular";
import { ROUTING } from "./app.routing";
import { APP_BASE_HREF } from "@angular/common";

describe('AppComponent', () => {

    let fixture: ComponentFixture<any>;
    let compiled: any;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,
                DeployComponent,
                OverviewComponent,
                BundleComponent,
                FsmContextComponent,
                SendEventComponent,
                ConfigureComponent,
            ],
            imports: [
                ClarityModule.forRoot(),
                ROUTING
            ],
            providers: [{provide: APP_BASE_HREF, useValue: '/'}]
        });

        fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        compiled = fixture.nativeElement;


    });

    afterEach(() => {
        fixture.destroy();
    });

    it('should create the app', async(() => {
        expect(compiled).toBeTruthy();
    }));


});
