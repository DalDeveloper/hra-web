import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { TablesComponent } from './tables.component';
import { TablesRoutingModule } from './tables-routing.module';
import { PageHeaderModule } from './../../shared';
import { DataTableModule,SharedModule, DialogModule,ButtonModule,DropdownModule,CalendarModule,InputTextModule,FileUploadModule } from 'primeng/primeng';
@NgModule({
    imports: [
        CommonModule,
        TablesRoutingModule,
        PageHeaderModule,
        DataTableModule,
        SharedModule,
        DialogModule,
        FormsModule,
        ButtonModule,
        DropdownModule,
        CalendarModule,
        InputTextModule,
        FileUploadModule
    ],
    declarations: [TablesComponent]
})
export class TablesModule { }
