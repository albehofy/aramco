import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { AccordionModule } from 'primeng/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyComponent } from './Pages/company/company.component';
import { AgentsComponent } from './Pages/agents/agents.component';
import { ProductComponent } from './Pages/product/product.component';
import { ContactUsComponent } from './Pages/contact-us/contact-us.component';
import { WhoIsUsComponent } from './Pages/who-is-us/who-is-us.component';
import { AboutComponent } from './Components/about/about.component';
import { FooterComponent } from './Components/footer/footer.component';
import { LoadingComponent } from './Components/loading/loading.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { CarouselComponent } from './Components/carousel/carousel.component';
import { MainComponent } from './Pages/main/main.component';
import { DepartmentsComponent } from './Pages/departments/departments.component';
import { CompaniesComponent } from './Pages/companies/companies.component';
import { ProductDetailsComponent } from './Pages/product-details/product-details.component';
import { JopsComponent } from './Pages/jops/jops.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,
    AgentsComponent,
    ProductComponent,
    ContactUsComponent,
    WhoIsUsComponent,
    AboutComponent,
    FooterComponent,
    LoadingComponent,
    NavbarComponent,
    CarouselComponent,
    MainComponent,
    DepartmentsComponent,
    CompaniesComponent,
    ProductDetailsComponent,
    JopsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    RouterModule, 
    RouterOutlet,
    CarouselModule,
    ButtonModule,
    TagModule,
    AccordionModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
