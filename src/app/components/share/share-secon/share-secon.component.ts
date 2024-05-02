import { Component, Input } from '@angular/core';

@Component({
  selector: 'ListHm',
  standalone: true,
  imports: [],
  template: `
        <a to={hrf}
            class="flex flex-row justify-start items-center hover:bg-slate-500 hover:text-slate-800 p-2 my-1 rounded-2xl border border-slate-600 w-200">
            <i [class]="iconClass"></i>
            <p class="mx-2 text-slate-300">{{Child}}</p>
        </a>
  `
})

export class ListHm {
  @Input() iconClass?: string;
  @Input() Child?:string;

}
