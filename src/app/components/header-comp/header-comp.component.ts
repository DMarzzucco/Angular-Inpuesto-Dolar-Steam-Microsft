import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header-comp',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
   <header class="flex px-2 my-2 flex-col justify-center items-center w-full">
            <div class="flex px-3 flex-row text-20 justify-between items-center w-full">
                <a routerLink="/" class="cursor-pointer">
                    <i class="fa-solid fa-chevron-left" ></i>
                </a>
                <button class="cursor-pointer" (click)="handMenu()">
                  <i class="fa-solid fa-bars-staggered"></i>
                </button>
            </div>
            @if (openMenu === true){
              <section  class='absolute mt-80 h-screen w-full bg-black bg-opacity-70 flex flex-col justify-center items-center'> 
                <button (click)="closeMenu()">CLose</button>
                <a routerLink="/Microsoft">Micro</a>
               </section> 

            } @else {}

        </header>
  `,
})
export class HeaderCompComponent {
  openMenu: boolean = false;

  handMenu() {
    this.openMenu = true;
  }
  closeMenu() {
    this.openMenu = false;
  }

}
