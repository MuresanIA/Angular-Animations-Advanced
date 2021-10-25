import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FadeinfadeoutComponent } from './animations/fadeinfadeout/fadeinfadeout.component';
import { ListAnimationsComponent } from './animations/list-animations/list-animations.component';
import { MultiStateAnimationComponent } from './animations/multi-state-animation/multi-state-animation.component';
import { SlideAnimationsComponent } from './animations/slide-animations/slide-animations.component';

const routes: Routes = [
  { path: 'fadeinfadeout', component: FadeinfadeoutComponent },
  { path: 'multistateanimation', component: MultiStateAnimationComponent },
  { path: 'listanimations', component: ListAnimationsComponent },
  { path: 'slideanimations', component: SlideAnimationsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
