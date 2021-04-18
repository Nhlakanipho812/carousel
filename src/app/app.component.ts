import { Component } from '@angular/core';
import SwiperCore, { Virtual, Swiper, SwiperOptions } from 'swiper/core';
SwiperCore.use([Virtual]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor() {}
  ngOnInit() {}
}
