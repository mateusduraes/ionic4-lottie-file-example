import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { LottieAnimationViewModule } from 'ng-lottie';
import { DemoComponent } from './animation.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ]),
    LottieAnimationViewModule.forRoot()
  ],
  declarations: [HomePage, DemoComponent]
})
export class HomePageModule {}
