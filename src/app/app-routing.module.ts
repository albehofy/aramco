import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './Pages/main/main.component'
import { CompanyComponent } from './Pages/company/company.component';
import { AgentsComponent } from './Pages/agents/agents.component';
import { ProductComponent } from './Pages/product/product.component';
import { WhoIsUsComponent } from './Pages/who-is-us/who-is-us.component';
import { ContactUsComponent } from './Pages/contact-us/contact-us.component';
import { DepartmentsComponent } from './Pages/departments/departments.component';
import { CompaniesComponent } from './Pages/companies/companies.component';
import { ProductDetailsComponent } from './Pages/product-details/product-details.component';
import { JopsComponent } from './Pages/jops/jops.component';

const routes: Routes = [
  {path:'',component:MainComponent}, 
    {path:'company',component:CompanyComponent}, 
    {path:'agents',component:AgentsComponent}, 
    {path:'companies',component:CompaniesComponent}, 
    {path:'departments',component:DepartmentsComponent}, 
    {path:'product',component:ProductComponent}, 
    {path:'product-details',component:ProductDetailsComponent}, 
    {path:'whoIsUs',component:WhoIsUsComponent}, 
    {path:'jops',component:JopsComponent}, 
    {path:'contactUs',component:ContactUsComponent}, 
    {path:'*',component:MainComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
