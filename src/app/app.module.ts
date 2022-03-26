import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';

import { HeaderComponent } from './header/header.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeDesignationComponent } from './employee-designation/employee-designation.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerLedgerComponent } from './customer-ledger/customer-ledger.component';
import { ProductSalesComponent } from './product-sales/product-sales.component';
import { ProductPurchaseComponent } from './product-purchase/product-purchase.component';
import { SupplierComponent } from './supplier/supplier.component';
import { SupplierLedgerComponent } from './supplier-ledger/supplier-ledger.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { SalesComponent } from './sales/sales.component';
import { ShowEmpComponent } from './employees/show-emp/show-emp.component';
import { AddEmpComponent } from './employees/add-emp/add-emp.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { ShowCustComponent } from './customer/show-cust/show-cust.component';
import { AddCustComponent } from './customer/add-cust/add-cust.component';
import { ShowCustLedgComponent } from './customer-ledger/show-cust-ledg/show-cust-ledg.component';
import { AddCustLedgComponent } from './customer-ledger/add-cust-ledg/add-cust-ledg.component';
import { ShowEmpDesgComponent } from './employee-designation/show-emp-desg/show-emp-desg.component';
import { AddEmpDesgComponent } from './employee-designation/add-emp-desg/add-emp-desg.component';
import { ShowPrdctPrchsComponent } from './product-purchase/show-prdct-prchs/show-prdct-prchs.component';
import { AddPrdctPrchsComponent } from './product-purchase/add-prdct-prchs/add-prdct-prchs.component';
import { ShowPrdctSaleComponent } from './product-sales/show-prdct-sale/show-prdct-sale.component';
import { AddPrdctSaleComponent } from './product-sales/add-prdct-sale/add-prdct-sale.component';
import { ShowPurchaseComponent } from './purchase/show-purchase/show-purchase.component';
import { AddPurchaseComponent } from './purchase/add-purchase/add-purchase.component';
import { ShowSalesComponent } from './sales/show-sales/show-sales.component';
import { AddSalesComponent } from './sales/add-sales/add-sales.component';
import { ShowSupplierComponent } from './supplier/show-supplier/show-supplier.component';
import { AddSupplierComponent } from './supplier/add-supplier/add-supplier.component';
import { ShowSuppLedgComponent } from './supplier-ledger/show-supp-ledg/show-supp-ledg.component';
import { AddSuppLedgComponent } from './supplier-ledger/add-supp-ledg/add-supp-ledg.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmployeesComponent,
    EmployeeDesignationComponent,
    CustomerComponent,
    CustomerLedgerComponent,
    ProductSalesComponent,
    ProductPurchaseComponent,
    SupplierComponent,
    SupplierLedgerComponent,
    PurchaseComponent,
    SalesComponent,
    ShowEmpComponent,
    AddEmpComponent,
    ShowCustComponent,
    AddCustComponent,
    ShowCustLedgComponent,
    AddCustLedgComponent,
    ShowEmpDesgComponent,
    AddEmpDesgComponent,
    ShowPrdctPrchsComponent,
    AddPrdctPrchsComponent,
    ShowPrdctSaleComponent,
    AddPrdctSaleComponent,
    ShowPurchaseComponent,
    AddPurchaseComponent,
    ShowSalesComponent,
    AddSalesComponent,
    ShowSupplierComponent,
    AddSupplierComponent,
    ShowSuppLedgComponent,
    AddSuppLedgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
