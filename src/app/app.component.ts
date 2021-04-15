import { Component } from '@angular/core';
import SwiperCore, { Virtual, Swiper, SwiperOptions } from 'swiper/core';
SwiperCore.use([Virtual]);

@Component({
  selector: 'app-root',
  template: `
    <div>
      <swiper [config]="config">
        <ng-container *ngFor="let slide of data; index as i">
          <ng-template swiperSlide>
            <div class="cell-content" [class.cell-active]="isActive">
              <div class="image-container-small"></div>
              <div class="image-container "></div>
              <div class="get-device-small">{{ slide.name }}</div>
              <div class="get-device">{{ slide.name }}</div>

              <div class="start-here">START HERE</div>
            </div>
          </ng-template>
        </ng-container>
      </swiper>
      <div class="left-arrow">
        <button type="button"><</button>
      </div>
      <div class="right-arrow">
        <button type="button" slideToClickedSlide>></button>
      </div>
    </div>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  config: SwiperOptions = {
    direction: 'horizontal',
    slidesPerView: 5,
    //slidesPerGroup: 5,
    loop: true,
    spaceBetween: 30,
    pagination: true,
    //navigation: true,
  };
  isActive = false;
  constructor() {}
  ngOnInit() {}

  next() {
    this.isActive = !this.isActive;
  }

  // Create array with 1000 slides
  data = [
    { id: 11, name: 'Mobile Internet' },
    { id: 12, name: 'Home Internet' },
    { id: 13, name: 'Get a device' },
    { id: 14, name: 'Add a phone-line' },
    { id: 15, name: 'Upgrade' },
  ];

  slides = Array.from({ length: 5 }).map((el, index) => `Slide ${index + 1}`);
}
