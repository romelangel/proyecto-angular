import { Component } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { BodyComponent } from './body/body.component';
import { SliderComponent } from './slider/slider.component';
import { FooterComponent } from './footer/footer.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { TestimoniosComponent } from './testimonios/testimonios.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MenuComponent,BodyComponent,SliderComponent,FooterComponent,ContactoComponent,ServiciosComponent,TestimoniosComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto-angular'; 
}
