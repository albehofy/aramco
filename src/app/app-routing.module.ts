import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './Pages/main/main.component'
import { AgentsComponent } from './Pages/agents/agents.component';
import { ProductComponent } from './Pages/product/product.component';
import { WhoIsUsComponent } from './Pages/who-is-us/who-is-us.component';
import { ContactUsComponent } from './Pages/contact-us/contact-us.component';
import { DepartmentsComponent } from './Pages/departments/departments.component';
import { CompaniesComponent } from './Pages/companies/companies.component';
import { ProductDetailsComponent } from './Pages/product-details/product-details.component';
import { JopsComponent } from './Pages/jops/jops.component';
import { CompaniesHoldersComponent } from './Pages/companies-holders/companies-holders.component';

const routes: Routes = [
  {path:'',component:MainComponent}, 
  {path:'whoIsUs',component:WhoIsUsComponent}, 
  {path:'contactUs',component:ContactUsComponent}, 
  {path:'jops',component:JopsComponent}, 
  {path:'company-hloder', component:CompaniesHoldersComponent},
  {path:'companies',component:CompaniesComponent}, 
  {path:'agents',component:AgentsComponent}, 
  {path:'departments/:id',component:DepartmentsComponent}, 
  {path:'product/:id',component:ProductComponent}, 
  {path:'product-details/:id',component:ProductDetailsComponent}, 
  {path:'*',component:MainComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
