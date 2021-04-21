import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const track = document.querySelector('.track');
    if (track !== null && track !== undefined) {
      const slides = Array.from(track.children);
      const next = document.querySelector('.button_next');
      const prev = document.querySelector('.button_prev');

      next?.addEventListener('click', (e) => {
        const currentSlide = track.querySelector('.current__slide');
        const nextSlide = currentSlide?.nextElementSibling;

        currentSlide?.classList.remove('current__slide');
        nextSlide?.classList.add('current__slide');
        currentSlide?.classList.remove('active');

        const firstChild = track.firstChild;
        firstChild?.remove();
        track.appendChild(firstChild as Node);

		nextSlide?.classList.add('active');
		
		
      });
      prev?.addEventListener('click', (e) => {
        const currentSlide = track.querySelector('.current__slide');
        const prevSlide = currentSlide?.previousElementSibling;

        currentSlide?.classList.remove('current__slide');
        prevSlide?.classList.add('current__slide');
        currentSlide?.classList.remove('active');

        const lastChild = track.lastChild;
        lastChild?.remove();
        track.prepend(lastChild as Node);
        prevSlide?.classList.add('active');
      });
    }
  }
}
