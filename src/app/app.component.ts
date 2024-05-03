import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FooterCompComponent } from './components/footer-comp/footer-comp.component';
import { HeaderCompComponent } from './components/header-comp/header-comp.component';
import { HomeComp } from './components/share/share-comps/share-comps.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, FooterCompComponent, HeaderCompComponent, HomeComp],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'NewConvert';

  Menu: boolean = false;

  abrirMenu() {
    this.Menu = !this.Menu
  }
  closeMenu() {
    this.Menu = false;
  }


}
