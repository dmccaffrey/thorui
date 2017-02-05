/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { Routes, RouterModule } from '@angular/router';

import { DeployComponent } from './deploy/deploy.component';
import { SystemComponent } from './system/system.component';
import { BundleComponent } from './bundle/bundle.component';


export const ROUTES: Routes = [
    {path: '', redirectTo: 'system', pathMatch: 'full'},
    {path: 'system', component: SystemComponent},
    {path: 'deploy', component: DeployComponent},
    {path: 'bundle', component: BundleComponent}
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);
