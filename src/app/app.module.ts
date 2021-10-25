import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FadeinfadeoutComponent } from './animations/fadeinfadeout/fadeinfadeout.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { MultiStateAnimationComponent } from './animations/multi-state-animation/multi-state-animation.component';
import { ListAnimationsComponent } from './animations/list-animations/list-animations.component';
import { SlideAnimationsComponent } from './animations/slide-animations/slide-animations.component';

@NgModule({
  declarations: [AppComponent, FadeinfadeoutComponent, NavbarComponent, MultiStateAnimationComponent, ListAnimationsComponent, SlideAnimationsComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
