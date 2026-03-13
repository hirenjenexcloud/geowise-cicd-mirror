import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransferRoutingModule } from './transfer-routing.module';
import { TransferComponent } from './transfer/transfer.component';
import { BulkTransferComponent } from './bulk-transfer/bulk-transfer.component';
import { TransferHistoryComponent } from './transfer-history/transfer-history.component';


@NgModule({
  declarations: [TransferComponent, BulkTransferComponent, TransferHistoryComponent],
  imports: [
    CommonModule,
    TransferRoutingModule
  ]
})
export class TransferModule { }
