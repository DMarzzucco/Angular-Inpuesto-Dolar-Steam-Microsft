import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'ListHm',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
        <a [routerLink]="RouterLink" routerLinkActive="active"
            class="flex flex-row justify-start items-center hover:bg-slate-500 hover:text-slate-800 p-2 my-1 rounded-2xl border border-slate-600 w-200">
            <i [class]="iconClass"></i>
            <p class="mx-2 text-slate-300">{{Child}}</p>
        </a>
  `
})

export class ListHm {
  @Input() iconClass?: string;
  @Input() Child?: string;
  @Input() RouterLink?: string;

}

@Component({
  selector: 'LinkNav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
   <a [routerLink]="RouterLink" routerLinkActive= "active " 
   class = 'w-200 flex flex-row justify-start items-center p-2 border rounded-xl my-1 hover:bg-slate-300 hover:text-slate-900'  >
    <i [class]="Icon" ></i>
    <p class="mx-2">{{title}}</p>
   </a>
  `,
})

export class LinkNav {
  @Input() title?: string;
  @Input() RouterLink?: string;
  @Input() Icon?: string;

}