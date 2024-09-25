import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set currentImage when setCurrentImage is called', () => {
    const testImage = '/Recursos/test.png'; // Imágen de prueba
    component.setCurrentImage(testImage);
    expect(component.currentImage).toBe(testImage); // Verifica que la imagen actual se haya actualizado
  });

  it('should navigate to previous image', () => {
    component.currentImage = component.images[1]; // Establecer una imagen inicial
    component.previousImage();
    expect(component.currentImage).toBe(component.images[0]); // Verifica que se haya ido a la imagen anterior
  });

  it('should navigate to next image', () => {
    component.currentImage = component.images[0]; // Establecer una imagen inicial
    component.nextImage();
    expect(component.currentImage).toBe(component.images[1]); // Verifica que se haya ido a la siguiente imagen
  });
});
