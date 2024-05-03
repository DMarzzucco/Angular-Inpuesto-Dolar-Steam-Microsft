import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { LinkNav } from '../share/share-secon/share-secon.component';

@Component({
  selector: 'app-header-comp',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, LinkNav],
  template: `
<header class="fixed flex px-2 my-2 flex-col justify-center items-center w-full">
  @if (openMenu === false){
    <div class=" flex px-2 my-2 flex-col justify-center items-center w-full">
              <div class="flex px-3 flex-row text-20 justify-between items-center w-full">
                  <a routerLink="/" class="cursor-pointer">
                      <i class="fa-solid fa-chevron-left" ></i>
                  </a>
                  <button class="cursor-pointer" (click)="handMenu()">
                    <i class="fa-solid fa-bars-staggered"></i>
                  </button>
              </div>  
          </div>

  } @else{}
     
  @if (openMenu === true){
        <section (click)="closeMenu()"  class='  h-screen w-full bg-black bg-opacity-70 flex flex-col justify-center items-center'> 
          <LinkNav [title]="'Steam'" [RouterLink]="'/Steam'" [Icon]="'fa-brands fa-steam'"/>
          <LinkNav [title]="'Microsoft'" [RouterLink]="'/Microsoft'" [Icon]="'fa-brands fa-microsoft'"/>
         </section> 
      } @else {}

  
</header>
  `,
})
export class HeaderCompComponent {
  openMenu: boolean = false;

  handMenu() {
    this.openMenu = !this.openMenu;
  }
  closeMenu() {
    this.openMenu = false;
  }

}
