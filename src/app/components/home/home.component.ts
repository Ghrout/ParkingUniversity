import { Component, AfterViewInit } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonComponent, CommonModule, FooterComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  currentImage: string = '/Recursos/sku2.png';
  images: string[] = [
    '/Recursos/sku2.png',
    '/Recursos/sku3.png',
  ];

  get currentIndex(): number {
    return this.images.indexOf(this.currentImage);
  }

  get previousIndex(): number {
    return (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  get nextIndex(): number {
    return (this.currentIndex + 1) % this.images.length;
  }

  setCurrentImage(image: string) {
    this.currentImage = image;
  }

  previousImage() {
    this.currentImage = this.images[this.previousIndex];
  }

  nextImage() {
    this.currentImage = this.images[this.nextIndex];
  }

  ngAfterViewInit() {
    const cards = document.querySelectorAll('.card');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeInUp');
          observer.unobserve(entry.target);
        }
      });
    });
    cards.forEach(card => {
      observer.observe(card);
    });
  }
}
