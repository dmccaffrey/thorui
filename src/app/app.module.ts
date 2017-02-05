import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ClarityModule } from 'clarity-angular';
import { AppComponent } from './app.component';
import { ROUTING } from "./app.routing";
import { SystemComponent } from "./system/system.component";
import { DeployComponent } from "./deploy/deploy.component";
import { BundleComponent } from "./bundle/bundle.component";
import { DiagramComponent } from "./diagram/diagram.component";
import { ContextComponent } from "./context/context.component";
import { SendEventComponent } from "./sendEvent/sendEvent.component";

@NgModule({
    declarations: [
        AppComponent,
        SystemComponent,
        DeployComponent,
        BundleComponent,
        DiagramComponent,
        ContextComponent,
        SendEventComponent
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
