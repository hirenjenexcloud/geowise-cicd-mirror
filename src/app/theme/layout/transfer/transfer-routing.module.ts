import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransferHistoryComponent } from './transfer-history/transfer-history.component';
import { BulkTransferComponent } from './bulk-transfer/bulk-transfer.component';
import { TransferComponent } from './transfer/transfer.component';


const routes: Routes = [
  {
    path: 'transfer',
    component: TransferComponent
  },
  {
    path: 'bulk_transfer',
    component: BulkTransferComponent
  },
  {
    path: 'transfer_history',
    component: TransferHistoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransferRoutingModule { }
