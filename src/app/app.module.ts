import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ClarityModule } from 'clarity-angular';
import { AppComponent } from './app.component';
import { ROUTING } from "./app.routing";

import { OverviewComponent } from "./overview/overview.component";
import { DeployComponent } from "./deploy/deploy.component";
import { BundleComponent } from "./bundle/bundle.component";
import { DiagramComponent } from "./diagram/diagram.component";
import { FsmContextComponent } from "./fsm-context/fsm-context.component";
import { SendEventComponent } from "./send-event/send-event.component";
import { SddcComponent } from "./sddc/sddc.component";
import { FsmTableComponent } from "./fsm-table/fsm-table.component";
import { ConfigureComponent } from "./configure/configure.component";

@NgModule({
    declarations: [
        AppComponent,
        OverviewComponent,
        DeployComponent,
        BundleComponent,
        DiagramComponent,
        FsmContextComponent,
        SendEventComponent,
        SddcComponent,
        FsmTableComponent,
        ConfigureComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ClarityModule.forRoot(),
        ROUTING
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
