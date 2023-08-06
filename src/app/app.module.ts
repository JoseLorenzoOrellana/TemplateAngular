import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ServiceComponent } from './service/service.component';
import { IntroSectionComponent } from './intro-section/intro-section.component';
import { AboutUsSectionComponent } from './about-us-section/about-us-section.component';
import { WhyUsSectionComponent } from './why-us-section/why-us-section.component';
import { PortfolioSectionComponent } from './portfolio-section/portfolio-section.component';
import { ClientsSectionComponent } from './clients-section/clients-section.component';
import { TestimonialsSectionComponent } from './testimonials-section/testimonials-section.component';
import { TeamSectionComponent } from './team-section/team-section.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { BoxComponent } from './service/box/box.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ServiceComponent,
    IntroSectionComponent,
    AboutUsSectionComponent,
    WhyUsSectionComponent,
    PortfolioSectionComponent,
    ClientsSectionComponent,
    TestimonialsSectionComponent,
    TeamSectionComponent,
    ContactSectionComponent,
    BoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
