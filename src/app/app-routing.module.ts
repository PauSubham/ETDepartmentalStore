import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustLedgComponent } from './customer-ledger/add-cust-ledg/add-cust-ledg.component';
import { CustomerLedgerComponent } from './customer-ledger/customer-ledger.component';
import { ShowCustLedgComponent } from './customer-ledger/show-cust-ledg/show-cust-ledg.component';
import { AddCustComponent } from './customer/add-cust/add-cust.component';
import { CustomerComponent } from './customer/customer.component';
import { ShowCustComponent } from './customer/show-cust/show-cust.component';
import { AddEmpDesgComponent } from './employee-designation/add-emp-desg/add-emp-desg.component';
import { EmployeeDesignationComponent } from './employee-designation/employee-designation.component';
import { ShowEmpDesgComponent } from './employee-designation/show-emp-desg/show-emp-desg.component';
import { AddEmpComponent } from './employees/add-emp/add-emp.component';
import { EmployeesComponent } from './employees/employees.component';
import { ShowEmpComponent } from './employees/show-emp/show-emp.component';
import { AddPrdctPrchsComponent } from './product-purchase/add-prdct-prchs/add-prdct-prchs.component';
import { ProductPurchaseComponent } from './product-purchase/product-purchase.component';
import { ShowPrdctPrchsComponent } from './product-purchase/show-prdct-prchs/show-prdct-prchs.component';
import { AddPrdctSaleComponent } from './product-sales/add-prdct-sale/add-prdct-sale.component';
import { ProductSalesComponent } from './product-sales/product-sales.component';
import { ShowPrdctSaleComponent } from './product-sales/show-prdct-sale/show-prdct-sale.component';
import { AddPurchaseComponent } from './purchase/add-purchase/add-purchase.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { ShowPurchaseComponent } from './purchase/show-purchase/show-purchase.component';
import { AddSalesComponent } from './sales/add-sales/add-sales.component';
import { SalesComponent } from './sales/sales.component';
import { ShowSalesComponent } from './sales/show-sales/show-sales.component';
import { AddSuppLedgComponent } from './supplier-ledger/add-supp-ledg/add-supp-ledg.component';
import { ShowSuppLedgComponent } from './supplier-ledger/show-supp-ledg/show-supp-ledg.component';
import { SupplierLedgerComponent } from './supplier-ledger/supplier-ledger.component';
import { AddSupplierComponent } from './supplier/add-supplier/add-supplier.component';
import { ShowSupplierComponent } from './supplier/show-supplier/show-supplier.component';
import { SupplierComponent } from './supplier/supplier.component';

const routes: Routes = [
  {path:"employees", component:EmployeesComponent, children:[
    {path:"", component:ShowEmpComponent},
    {path:"create", component:AddEmpComponent},
    {path:"edit/:id", component:AddEmpComponent}
  ]},
  {path:"employee-designation", component:EmployeeDesignationComponent, children:[
    {path:"", component:ShowEmpDesgComponent},
    {path:"create", component:AddEmpDesgComponent},
    {path:"edit/:id", component:AddEmpDesgComponent}
  ]},
  {path:"customer", component:CustomerComponent, children:[
    {path:"", component:ShowCustComponent},
    {path:"create", component:AddCustComponent},
    {path:"edit/:id", component:AddCustComponent}
  ]},
  {path:"customer-ledger", component:CustomerLedgerComponent, children:[
    {path:"", component:ShowCustLedgComponent},
    {path:"create", component:AddCustLedgComponent},
    {path:"edit/:id", component:AddCustLedgComponent}
  ]},
  {path:"product-purchase", component:ProductPurchaseComponent, children:[
    {path:"", component:ShowPrdctPrchsComponent},
    {path:"create", component:AddPrdctPrchsComponent},
    {path:"edit/:id", component:AddPrdctPrchsComponent}
  ]},
  {path:"product-sales", component:ProductSalesComponent, children:[
    {path:"", component:ShowPrdctSaleComponent},
    {path:"create", component:AddPrdctSaleComponent},
    {path:"edit/:id", component:AddPrdctSaleComponent}
  ]},
  {path:"purchase", component:PurchaseComponent, children:[
    {path:"", component:ShowPurchaseComponent},
    {path:"create", component:AddPurchaseComponent},
    {path:"edit/:id", component:AddPurchaseComponent}
  ]},
  {path:"sales", component:SalesComponent, children:[
    {path:"", component:ShowSalesComponent},
    {path:"create", component:AddSalesComponent},
    {path:"edit/:id", component:AddSalesComponent}
  ]},
  {path:"supplier", component:SupplierComponent, children:[
    {path:"", component:ShowSupplierComponent},
    {path:"create", component:AddSupplierComponent},
    {path:"edit/:id", component:AddSupplierComponent}
  ]},
  {path:"supplier-ledger", component:SupplierLedgerComponent, children:[
    {path:"", component:ShowSuppLedgComponent},
    {path:"create", component:AddSuppLedgComponent},
    {path:"edit/:id", component:AddSuppLedgComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
