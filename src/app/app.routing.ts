/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { Routes, RouterModule } from '@angular/router';

import { DeployComponent } from './deploy/deploy.component';
import { OverviewComponent } from './overview/overview.component';
import { BundleComponent } from './bundle/bundle.component';
import { SddcComponent } from './sddc/sddc.component';
import { ConfigureComponent } from './configure/configure.component';


export const ROUTES: Routes = [
    {path: '', redirectTo: 'overview', pathMatch: 'full'},
    {path: 'overview', component: OverviewComponent},
    {path: 'deploy', component: DeployComponent},
    {path: 'bundle', component: BundleComponent},
    {path: 'sddc', component: SddcComponent},
    {path: 'config', component: ConfigureComponent}
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);
