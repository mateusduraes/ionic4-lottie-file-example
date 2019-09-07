import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  lottieConfig = {
    path: 'assets/animation.json',
    renderer: 'canvas',
    autoplay: true,
    loop: true
  };
  constructor() {}
}
