import { Component, Input } from '@angular/core';
import { ListHm } from '../share-secon/share-secon.component';

@Component({
  selector: 'ListF',
  standalone: true,
  imports: [],
  template: `
     <a [href]="href" class='m-2 text-30'>
       <i [class]="iconClass" ></i>
      </a>
  `,
})
export class ListF {
  @Input() href?: string;
  @Input() iconClass?: string;

  constructor() {
    this.href = '';
  }


}
// HomeComp
@Component({
  selector: 'HomeComp',
  standalone: true,
  imports: [ListHm],
  template: `
        <div class="border border-slate-400 rounded-2xl my-2 p-2">
            <ul class="flex flex-col justify-center items-center p-3">
                <ListHm [Child]="'Microsoft'" [iconClass]="'fa-brands fa-microsoft'" style="color: skyblue;"></ListHm>
                <ListHm [Child]="'Steam'" [iconClass]="'fa-brands fa-steam'" style="color: slategray;"></ListHm>
            </ul>
        </div>
  `
})
export class HomeComp { }

