import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { PreloaderComponent } from './components/preloader/preloader.component';
import { IntroParallaxComponent } from './components/intro-parallax/intro-parallax.component';
import { HomeBannerComponent } from './components/home-banner/home-banner.component';
import { OurProcessComponent } from './components/our-process/our-process.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { ServicesComponent } from './components/services/services.component';
import { AboutComponent } from './components/about/about.component';
import { Parallax2Component } from './components/parallax2/parallax2.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { TeamComponent } from './components/team/team.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { ContactComponent } from './components/contact/contact.component';
import { MapComponent } from './components/map/map.component';
import { FooterComponent } from './components/footer/footer.component';

const appRoutes: Routes = [
  { path: 'crisis-center', component: HomeComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PreloaderComponent,
    IntroParallaxComponent,
    HomeBannerComponent,
    OurProcessComponent,
    TestimonialsComponent,
    ServicesComponent,
    AboutComponent,
    Parallax2Component,
    ProfileComponent,
    TimelineComponent,
    TeamComponent,
    PricingComponent,
    ContactComponent,
    MapComponent,
    FooterComponent
  ],
  
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
