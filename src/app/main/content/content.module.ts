import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FuseSharedModule } from '@fuse/shared.module';

import { FuseContentComponent } from 'app/main/content/content.component';
import { DevicesComponent } from './pages/devices/devices.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { UsersComponent } from './pages/users/users.component';
import { ReportsComponent } from './pages/reports/reports.component';

@NgModule({
    declarations: [
        FuseContentComponent,
        DevicesComponent,
        CustomersComponent,
        ClientsComponent,
        UsersComponent,
        ReportsComponent
    ],
    imports     : [
        RouterModule,

        FuseSharedModule,
    ],
    exports: [
        FuseContentComponent
    ]
})
export class FuseContentModule
{
}
